# r1cord

A modern, responsive landing page built with Next.js and deployed on Vercel. This project showcases the power of modern web development with a clean, professional design.

## 🚀 Features

- **Modern Design** - Clean, professional landing page with gradient styling
- **Responsive** - Fully responsive design that works on all devices
- **Performance Optimized** - Built with Next.js 15 for maximum performance
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vercel Ready** - Optimized for deployment on Vercel's global edge network

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

For local development, create a `.env.local` file in the root directory with your environment variables:

```bash
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

For production deployment on Vercel, add these environment variables in your Vercel dashboard:

1. Go to your project on Vercel
2. Navigate to Settings → Environment Variables
3. Add the following variables:

- `NEXT_PUBLIC_APP_NAME` - Your application name
- `NEXT_PUBLIC_APP_URL` - Your production domain
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_API_URL` - Your API endpoint (if applicable)

## Deploy on Vercel

This project is optimized for Vercel deployment with the following features:

- ✅ **Standalone Output** - Optimized build output for faster deployments
- ✅ **Image Optimization** - Automatic WebP/AVIF conversion
- ✅ **Compression** - Automatic gzip compression
- ✅ **Vercel Analytics** - Built-in analytics support
- ✅ **Edge Runtime** - Serverless functions at the edge

### Quick Deploy

1. **Push to GitHub** - Commit and push your code to a GitHub repository
2. **Connect to Vercel** - Go to [vercel.com](https://vercel.com) and connect your GitHub account
3. **Import Project** - Import your repository
4. **Deploy** - Vercel will automatically detect Next.js and deploy

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Domain Configuration

After deployment, you can configure custom domains in your Vercel dashboard under Project Settings → Domains.

## Performance Optimizations

This project includes several performance optimizations for Vercel:

- **Package Optimization** - Optimized imports for better bundle size
- **Image Optimization** - Modern image formats (WebP, AVIF)
- **Compression** - Automatic compression for faster loading
- **Edge Caching** - Optimized caching headers for static assets
