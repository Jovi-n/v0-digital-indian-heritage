import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DH</span>
          </div>
          <h1 className="font-heading font-bold text-xl text-primary">Digital Indian Heritage</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#categories" className="text-foreground hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
