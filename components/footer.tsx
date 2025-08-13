import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Leaf className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">KrishiMitra 2.0</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering farmers with AI-driven insights for better crop management, price predictions, and disease
              detection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-accent transition-colors">
                  Explore Features
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-accent transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">AI Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Crop Recommendations</li>
              <li className="text-muted-foreground">Price Predictions</li>
              <li className="text-muted-foreground">Disease Detection</li>
              <li className="text-muted-foreground">Weather Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@krishimitra.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 KrishiMitra 2.0. All rights reserved. Built with AI for farmers.</p>
        </div>
      </div>
    </footer>
  )
}
