import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Mughal Paintings",
    description:
      "Exquisite miniature paintings from the Mughal era showcasing court life, nature, and spiritual themes.",
    count: "150+ Artworks",
    image: "/mughal-miniature-painting-with-intricate-details-a.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Temple Sculptures",
    description:
      "Sacred stone and bronze sculptures from ancient temples across India, depicting deities and mythological scenes.",
    count: "200+ Sculptures",
    image: "/ancient-indian-temple-sculpture-carved-stone-deity.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Folk Art Traditions",
    description:
      "Vibrant folk art forms including Madhubani, Warli, Pattachitra, and other regional artistic traditions.",
    count: "300+ Pieces",
    image: "/colorful-indian-folk-art-madhubani-painting-tradit.jpg",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Rajasthani Art",
    description:
      "Royal paintings and decorative arts from Rajasthan, featuring elaborate palaces, portraits, and cultural scenes.",
    count: "120+ Works",
    image: "/rajasthani-miniature-painting-royal-palace-scene-v.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
]

export function ArtCategories() {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">Explore Art Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dive deep into different art forms and discover the diverse artistic traditions that flourished across
            India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent`} />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-xl">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{category.description}</p>
                </div>

                <Button variant="outline" className="w-full group bg-transparent">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
