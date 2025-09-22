# r1cord - Discord Client for Rabbit R1

A comprehensive Discord client optimized specifically for the Rabbit R1 device, featuring push-to-talk voice communication and full Discord functionality.

## 🚀 Installation

### Option 1: QR Code Installation
Scan the QR code with your Rabbit R1 camera to install directly on your device.

### Option 2: Manual Installation
Visit: `https://r1cord.vercel.app/discord-client/`

## ⚠️ Important Security Notice

**This app is hosted on external servers (Vercel) rather than Rabbit's official servers.**

### Security Implications:
- External hosting may pose additional security risks
- Data is transmitted to third-party servers
- Updates are not managed by Rabbit
- Only install if you trust the developer

### Permissions Required:
- Microphone access for voice communication
- Storage for authentication data
- Network access for Discord API communication

## 📱 First Time Setup

1. **Welcome Screen**: Introduction to r1cord features
2. **Security Warning**: Review and accept untrusted source warning
3. **Discord Authentication**: Login with your Discord account
4. **Server Access**: Select and join your Discord servers

## 🎮 Controls

### R1 Hardware Controls:
- **Side Button (PTT)**: Push-to-talk for voice communication
- **Scroll Wheel**: Navigate through servers, channels, and messages
- **Long Press**: Extended push-to-talk sessions

### Voice Communication:
- **Push-to-Talk**: Hold side button to speak
- **Voice Messages**: Hold PTT in text channels to send voice messages
- **Channel Selection**: Navigate to voice channels to join voice chat

## 🔧 Features

### Text Communication:
- Full Discord text chat experience
- Server and channel navigation
- Message history and search
- Rich message formatting

### Voice Communication:
- Crystal clear voice chat
- Push-to-talk functionality
- Voice channel management
- User presence indicators

### Server Management:
- Server list navigation
- Channel organization
- Role and permission handling
- Server-specific settings

## 🛠️ Development

### Project Structure:
```
discord-client/
├── manifest.json          # Rabbit R1 creation manifest
├── index.html            # Main application entry point
├── icon.svg              # App icon
├── r1cord-install-qr.png # Installation QR code
└── apps/
    └── app/
        ├── src/
        │   ├── main.js   # Application logic
        │   └── style.css # R1-optimized styling
        └── index.html    # R1-specific interface
```

### Building for Production:
```bash
cd apps/app
npm install
npm run build
```

### Testing:
- Open `https://r1cord.vercel.app/discord-client/` in browser
- Add `#test` to URL for development features
- Use spacebar as PTT button in browser testing

## 📄 Manifest Configuration

The `manifest.json` defines the creation properties:
- **Type**: Web application
- **Permissions**: Microphone, storage, network
- **Untrusted Source**: Marked as external hosting
- **Categories**: Communication, social

## 🔒 Privacy & Security

- All Discord API calls use HTTPS encryption
- Authentication tokens stored securely using R1 storage API
- No personal data stored on external servers
- Voice data transmitted directly to Discord servers

## 🆘 Support

For issues or questions:
- Check the main landing page at `https://r1cord.vercel.app`
- Review the untrusted source warning before installation
- Ensure Discord app permissions are properly configured

## 📝 Version History

### v1.0.0
- Initial release
- Full Discord client functionality
- R1 hardware integration
- Push-to-talk voice communication
- Server and channel management
