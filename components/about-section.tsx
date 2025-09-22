import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, BookOpen, Award } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Curated Collection",
    description: "Over 800 carefully selected artworks representing the finest examples of Indian artistic heritage.",
  },
  {
    icon: Users,
    title: "Expert Curation",
    description: "Artworks selected and described by leading art historians and cultural experts.",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Detailed historical context, artistic techniques, and cultural significance for each piece.",
  },
  {
    icon: Award,
    title: "Preservation Mission",
    description: "Digitally preserving India's artistic legacy for future generations to discover and appreciate.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
                Preserving India's Artistic Soul
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Digital Indian Heritage is more than an art gallery—it's a cultural bridge connecting past and present.
                Our mission is to make India's incredible artistic legacy accessible to everyone, everywhere.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                From the intricate miniatures of Mughal courts to the powerful sculptures of ancient temples, each
                artwork tells a story of India's rich cultural tapestry. We believe that art has the power to educate,
                inspire, and unite people across cultures and generations.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
