import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { refresh_token } = body;

    if (!refresh_token) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 400 }
      );
    }

    const clientId = process.env.DISCORD_CLIENT_ID;
    const clientSecret = process.env.DISCORD_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Refresh the access token
    const refreshResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      }),
    });

    const refreshData = await refreshResponse.json();

    if (!refreshResponse.ok) {
      console.error('Token refresh failed:', refreshData);
      return NextResponse.json(
        { error: 'Token refresh failed', details: refreshData },
        { status: refreshResponse.status }
      );
    }

    // Return the new tokens
    return NextResponse.json({
      access_token: refreshData.access_token,
      refresh_token: refreshData.refresh_token,
      expires_in: refreshData.expires_in,
      token_expiry: Date.now() + (refreshData.expires_in * 1000),
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      { error: 'Server error during token refresh' },
      { status: 500 }
    );
  }
}
