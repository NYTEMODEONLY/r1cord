import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = `${request.nextUrl.origin}/api/auth/discord/callback`;

  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error)}`, request.url)
    );
  }

  if (!code) {
    return NextResponse.redirect(
      new URL('/?error=no_code', request.url)
    );
  }

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(
      new URL('/?error=config_error', request.url)
    );
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData);
      return NextResponse.redirect(
        new URL(`/?error=token_exchange_failed&details=${encodeURIComponent(JSON.stringify(tokenData))}`, request.url)
      );
    }

    // Get user information
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('User fetch failed:', userData);
      return NextResponse.redirect(
        new URL(`/?error=user_fetch_failed&details=${encodeURIComponent(JSON.stringify(userData))}`, request.url)
      );
    }

    // Create auth data object
    const authData = {
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
      token_expiry: Date.now() + (tokenData.expires_in * 1000),
      user: userData,
      scope: tokenData.scope,
    };

    // Create a secure token for the client (base64 encoded)
    const clientToken = btoa(JSON.stringify(authData));

    // Redirect back to the app with the auth data
    return NextResponse.redirect(
      new URL(`/?auth=${encodeURIComponent(clientToken)}`, request.url)
    );

  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/?error=server_error', request.url)
    );
  }
}
