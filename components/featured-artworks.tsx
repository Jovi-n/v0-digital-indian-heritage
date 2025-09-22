"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const featuredArtworks = [
  {
    id: 1,
    title: "Radha Krishna in Garden",
    artist: "Unknown Mughal Artist",
    period: "17th Century",
    category: "Mughal Painting",
    description:
      "A sublime depiction of divine love between Radha and Krishna set in a lush garden, showcasing the finest Mughal miniature painting techniques.",
    image: "/mughal-miniature-painting-of-radha-krishna-in-gard.jpg",
    likes: 234,
  },
  {
    id: 2,
    title: "Nataraja Bronze Sculpture",
    artist: "Chola Dynasty Artisan",
    period: "11th Century",
    category: "Temple Sculpture",
    description:
      "The cosmic dance of Lord Shiva as Nataraja, representing the eternal cycle of creation and destruction in this masterpiece of Chola bronze work.",
    image: "/ancient-indian-bronze-nataraja-sculpture-dancing-p.jpg",
    likes: 189,
  },
  {
    id: 3,
    title: "Warli Folk Art",
    artist: "Tribal Artists of Maharashtra",
    period: "Traditional Contemporary",
    category: "Folk Art",
    description:
      "Traditional Warli paintings depicting daily life, harvest festivals, and nature worship using simple geometric patterns and natural pigments.",
    image: "/traditional-indian-warli-folk-art-with-geometric-p.jpg",
    likes: 156,
  },
]

export function FeaturedArtworks() {
  const [likedArtworks, setLikedArtworks] = useState<Set<number>>(new Set())
  const [artworkLikes, setArtworkLikes] = useState<Record<number, number>>(
    featuredArtworks.reduce((acc, artwork) => ({ ...acc, [artwork.id]: artwork.likes }), {}),
  )

  const handleLike = (artworkId: number) => {
    const isLiked = likedArtworks.has(artworkId)
    const newLikedArtworks = new Set(likedArtworks)

    if (isLiked) {
      newLikedArtworks.delete(artworkId)
      setArtworkLikes((prev) => ({ ...prev, [artworkId]: prev[artworkId] - 1 }))
    } else {
      newLikedArtworks.add(artworkId)
      setArtworkLikes((prev) => ({ ...prev, [artworkId]: prev[artworkId] + 1 }))
    }

    setLikedArtworks(newLikedArtworks)
  }

  const handleShare = async (artwork: (typeof featuredArtworks)[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: `Check out this beautiful artwork: ${artwork.title} by ${artwork.artist}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${artwork.title} - ${window.location.href}`)
      alert("Link copied to clipboard!")
    }
  }

  const handleViewDetails = (artwork: (typeof featuredArtworks)[0]) => {
    alert(
      `Viewing details for: ${artwork.title}\n\nArtist: ${artwork.artist}\nPeriod: ${artwork.period}\nCategory: ${artwork.category}\n\n${artwork.description}`,
    )
  }

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">Featured Masterpieces</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover some of the most celebrated works in Indian art history, each telling a unique story of our
            cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {artwork.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{artwork.period}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-balance">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                </div>

                <p className="text-sm text-pretty leading-relaxed">{artwork.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleLike(artwork.id)}>
                      <Heart
                        className={`h-4 w-4 mr-1 ${likedArtworks.has(artwork.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      {artworkLikes[artwork.id]}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleShare(artwork)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleViewDetails(artwork)}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
