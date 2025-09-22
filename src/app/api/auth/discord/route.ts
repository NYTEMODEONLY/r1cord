import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = `${request.nextUrl.origin}/api/auth/discord/callback`;

  if (!clientId) {
    return NextResponse.json(
      { error: 'Discord client ID not configured' },
      { status: 500 }
    );
  }

  // Discord OAuth2 scopes for comprehensive client functionality
  const scope = 'identify guilds guilds.members.read messages.read dm_channels.read messages.write voice rpc rpc.voice.read rpc.voice.write rpc.activities.write connections relationships.read gdm.join guilds.join webhook.incoming applications.commands';

  // Generate Discord authorization URL
  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&prompt=consent`;

  // Redirect to Discord authorization
  return NextResponse.redirect(authUrl);
}
