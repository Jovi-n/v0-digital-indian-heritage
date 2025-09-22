"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

interface Artwork {
  id: string
  title: string
  artist: string
  period: string
  category: string
  description: string
  image_url: string
  year_created?: string
  medium?: string
  dimensions?: string
  location?: string
  cultural_significance?: string
}

export function FeaturedArtworks() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [likedArtworks, setLikedArtworks] = useState<Set<string>>(new Set())
  const [artworkLikes, setArtworkLikes] = useState<Record<string, number>>({})
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    fetchArtworks()
    checkUser()
  }, [])

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
    if (user) {
      fetchUserLikes(user.id)
    }
  }

  const fetchArtworks = async () => {
    try {
      const { data, error } = await supabase.from("artworks").select("*").limit(6)

      if (error) {
        console.error("Error fetching artworks:", error)
        return
      }

      setArtworks(data || [])

      // Initialize like counts (in a real app, you'd get this from a view or separate query)
      const likeCounts: Record<string, number> = {}
      for (const artwork of data || []) {
        const { count } = await supabase
          .from("artwork_likes")
          .select("*", { count: "exact", head: true })
          .eq("artwork_id", artwork.id)

        likeCounts[artwork.id] = count || 0
      }
      setArtworkLikes(likeCounts)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserLikes = async (userId: string) => {
    try {
      const { data, error } = await supabase.from("artwork_likes").select("artwork_id").eq("user_id", userId)

      if (error) {
        console.error("Error fetching user likes:", error)
        return
      }

      const likedIds = new Set(data?.map((like) => like.artwork_id) || [])
      setLikedArtworks(likedIds)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleLike = async (artworkId: string) => {
    if (!user) {
      alert("Please sign in to like artworks")
      return
    }

    const isLiked = likedArtworks.has(artworkId)
    const newLikedArtworks = new Set(likedArtworks)

    try {
      if (isLiked) {
        const { error } = await supabase
          .from("artwork_likes")
          .delete()
          .eq("user_id", user.id)
          .eq("artwork_id", artworkId)

        if (error) throw error

        newLikedArtworks.delete(artworkId)
        setArtworkLikes((prev) => ({ ...prev, [artworkId]: prev[artworkId] - 1 }))
      } else {
        const { error } = await supabase.from("artwork_likes").insert({ user_id: user.id, artwork_id: artworkId })

        if (error) throw error

        newLikedArtworks.add(artworkId)
        setArtworkLikes((prev) => ({ ...prev, [artworkId]: prev[artworkId] + 1 }))
      }

      setLikedArtworks(newLikedArtworks)
    } catch (error) {
      console.error("Error updating like:", error)
      alert("Error updating like. Please try again.")
    }
  }

  const handleShare = async (artwork: Artwork) => {
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

  const handleViewDetails = (artwork: Artwork) => {
    const details = [
      `Title: ${artwork.title}`,
      `Artist: ${artwork.artist}`,
      `Period: ${artwork.period}`,
      `Category: ${artwork.category}`,
      artwork.year_created && `Year: ${artwork.year_created}`,
      artwork.medium && `Medium: ${artwork.medium}`,
      artwork.dimensions && `Dimensions: ${artwork.dimensions}`,
      artwork.location && `Location: ${artwork.location}`,
      "",
      artwork.description,
      "",
      artwork.cultural_significance && `Cultural Significance: ${artwork.cultural_significance}`,
    ]
      .filter(Boolean)
      .join("\n")

    alert(details)
  }

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>Loading artworks...</p>
          </div>
        </div>
      </section>
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
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={artwork.image_url || "/placeholder.svg"}
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
                      {artworkLikes[artwork.id] || 0}
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
