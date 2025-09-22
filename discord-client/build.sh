#!/bin/bash

# Build script for r1cord Rabbit R1 Creation
echo "🚀 Building r1cord for Rabbit R1..."

# Navigate to the app directory
cd apps/app

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Copy built files to root
echo "📋 Copying built files..."
cp -r dist/* ../../

echo "✅ Build complete!"
echo "📱 Your r1cord creation is ready!"
echo "🔗 Installation URL: https://r1cord.vercel.app/discord-client/"
echo ""
echo "To install on Rabbit R1:"
echo "1. Visit the URL above on your R1 device"
echo "2. Or scan the QR code from the landing page"
echo "3. Accept the untrusted source warning"
echo "4. Login with Discord and enjoy!"
echo ""
echo "⚠️  Remember: This is hosted on Vercel (untrusted source)"
