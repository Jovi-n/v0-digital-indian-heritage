import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedArtworks } from "@/components/featured-artworks"
import { ArtCategories } from "@/components/art-categories"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedArtworks />
        <ArtCategories />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
