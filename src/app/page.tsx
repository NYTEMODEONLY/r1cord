'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Users, Mic, Smartphone, Zap, Shield, Download, Github, Twitter } from 'lucide-react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Image from 'next/image'

function FloatingDiscordLogo() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5865f2" />
      </mesh>
    </Float>
  )
}

function DiscordAnimation() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingDiscordLogo />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  r1cord
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#device" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  For R1
                </a>
                <a href="#download" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Download
                </a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <DiscordAnimation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <Badge className="mb-6 bg-purple-600 text-white">
              Now Available for Rabbit R1
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Discord on Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rabbit R1
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience Discord like never before on your Rabbit R1 device. Chat, voice call, and stay connected
              with your community anywhere, anytime - optimized specifically for the R1&apos;s unique interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="mr-2 h-5 w-5" />
                Download r1cord
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                <Smartphone className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* QR Code Installation */}
            <div className="mt-12 p-8 bg-black/20 rounded-2xl border border-purple-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">📱 Install on Rabbit R1</h3>
                <p className="text-gray-300 mb-6">
                  Scan this QR code with your Rabbit R1 camera to install r1cord directly on your device
                </p>

                {/* QR Code Display */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-2xl shadow-2xl">
                    <Image
                      src="/r1cord-install-qr.png"
                      alt="Install r1cord on Rabbit R1"
                      width={192}
                      height={192}
                      className="rounded-lg"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-yellow-200">
                    <strong>⚠️ Untrusted Source Notice:</strong><br />
                    This app is hosted on Vercel rather than Rabbit servers.
                    Only install if you trust the developer.
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-blue-200">
                    <strong>🔒 Security:</strong><br />
                    Your Discord data is encrypted and secure.
                    Review permissions before installing.
                  </div>
                </div>

                <div className="mt-6 text-gray-400 text-sm">
                  <p>Having trouble? Visit: <code className="bg-gray-800 px-2 py-1 rounded">r1cord.vercel.app/discord-client/</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-slate-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Rabbit R1
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience Discord optimized specifically for your R1 device with features designed for seamless communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-purple-500/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Text Chat</CardTitle>
                <CardDescription className="text-gray-300">
                  Full Discord text chat experience optimized for the R1&apos;s unique interface and controls
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900/50 border-purple-500/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Voice Calls</CardTitle>
                <CardDescription className="text-gray-300">
                  Crystal clear voice communication with push-to-talk functionality perfect for R1
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900/50 border-purple-500/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Server Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage servers, roles, and permissions with an interface tailored for R1&apos;s capabilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Showcase Section */}
      <section id="device" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Optimized for Rabbit R1
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                r1cord is specifically designed and optimized for the Rabbit R1 device, taking advantage of its unique
                hardware capabilities and interface to deliver the best Discord experience possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Zap className="w-6 h-6 text-blue-400 mr-3" />
                  <span>Optimized performance for R1&apos;s hardware specifications</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Smartphone className="w-6 h-6 text-purple-400 mr-3" />
                  <span>Tailored interface for R1&apos;s unique form factor and controls</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <span>Secure and private communication with end-to-end encryption</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-purple-500/20">
                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-green-400 text-sm font-mono">r1cord v1.0</div>
                  </div>
                  <div className="space-y-3 text-sm font-mono text-gray-300">
                    <div className="text-blue-400">$ r1cord --start</div>
                    <div>✓ Discord client initialized</div>
                    <div>✓ Connected to 3 servers</div>
                    <div>✓ Voice chat ready</div>
                    <div className="text-green-400">✓ Ready for Rabbit R1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download r1cord today and experience Discord on your Rabbit R1 device
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Free Download</CardTitle>
                <CardDescription className="text-gray-300">
                  No subscription required. Completely free for R1 users.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Quick Install</CardTitle>
                <CardDescription className="text-gray-300">
                  Simple installation process optimized for Rabbit R1.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Regular Updates</CardTitle>
                <CardDescription className="text-gray-300">
                  Frequent updates with new features and improvements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="mr-2 h-5 w-5" />
            Download r1cord v1.0
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                r1cord
              </h3>
              <p className="text-gray-300 mb-6">
                Discord client optimized for Rabbit R1 devices. Stay connected with your community anywhere, anytime.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/r1" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="#device" className="text-gray-400 hover:text-white transition-colors">For R1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord Server</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 r1cord. Built for Rabbit R1 users. Open source and free.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
