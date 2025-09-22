"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const handleExploreGallery = () => {
    const gallerySection = document.getElementById("gallery")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleVirtualTour = () => {
    alert(
      "Virtual Tour feature coming soon! This will provide an immersive 3D experience of Indian art galleries and museums.",
    )
  }

  return (
    <section id="home" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
                Discover India's
                <span className="text-primary block">Artistic Legacy</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Journey through centuries of Indian art and culture. From ancient temple sculptures to intricate Mughal
                paintings, explore the rich heritage that defines our civilization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={handleExploreGallery}>
                Explore Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleVirtualTour}>
                Virtual Tour
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/beautiful-indian-mughal-painting-with-intricate-de.jpg"
                alt="Featured Indian artwork showcasing traditional Mughal painting style"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
              <p className="text-sm font-medium">Featured Artwork</p>
              <p className="text-xs text-muted-foreground">Mughal Court Scene, 16th Century</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
