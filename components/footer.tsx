import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">DH</span>
              </div>
              <h3 className="font-heading font-bold text-xl">Digital Indian Heritage</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm text-pretty leading-relaxed">
              Preserving and sharing India's incredible artistic legacy through digital innovation and cultural
              education.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Featured Gallery
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Art Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Virtual Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Educational Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Art History
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cultural Context
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Artist Profiles
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Research Papers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Connect</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">info@digitalheritage.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Digital Indian Heritage. Made with <Heart className="inline h-4 w-4 text-red-400" /> for Indian art.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
