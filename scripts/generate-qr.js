const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function generateQR() {
  try {
    // Get the Vercel deployment URL - in production this would be your actual domain
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://r1cord.vercel.app';

    // The QR code should point to the discord-client directory
    const installUrl = `${baseUrl}/discord-client/`;

    console.log(`Generating QR code for: ${installUrl}`);

    // Generate QR code as data URL
    const qrDataUrl = await QRCode.toDataURL(installUrl, {
      width: 256,
      margin: 2,
      color: {
        dark: '#5865f2',  // Discord blue
        light: '#ffffff'
      }
    });

    // Save QR code as PNG file
    const qrBuffer = Buffer.from(qrDataUrl.split(',')[1], 'base64');
    const outputPath = path.join(__dirname, '../public/r1cord-install-qr.png');
    fs.writeFileSync(outputPath, qrBuffer);

    console.log(`QR code generated and saved to: ${outputPath}`);

    // Also save as SVG for better quality
    const qrSvg = await QRCode.toString(installUrl, {
      width: 256,
      margin: 2,
      color: {
        dark: '#5865f2',
        light: '#ffffff'
      },
      type: 'svg'
    });

    const svgPath = path.join(__dirname, '../public/r1cord-install-qr.svg');
    fs.writeFileSync(svgPath, qrSvg);
    console.log(`QR code SVG saved to: ${svgPath}`);

    return { installUrl, qrDataUrl };
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  generateQR()
    .then(({ installUrl }) => {
      console.log('\n✅ QR Code Generation Complete!');
      console.log(`📱 Installation URL: ${installUrl}`);
      console.log('🔗 Users can scan the QR code or visit the URL to install r1cord');
    })
    .catch(console.error);
}

module.exports = { generateQR };
