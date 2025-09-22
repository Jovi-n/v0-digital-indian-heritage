-- Create artworks table to store all the gallery pieces
CREATE TABLE IF NOT EXISTS public.artworks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  year_created TEXT,
  medium TEXT,
  dimensions TEXT,
  location TEXT,
  cultural_significance TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample artworks data
INSERT INTO public.artworks (title, artist, period, description, image_url, category, year_created, medium, dimensions, location, cultural_significance) VALUES
('The Mughal Garden', 'Unknown Master', 'Mughal Era (1526-1857)', 'An exquisite Mughal miniature painting depicting a royal garden scene with intricate floral patterns and architectural elements. The painting showcases the sophisticated artistic techniques of the Mughal court.', '/beautiful-indian-mughal-painting-with-intricate-de.jpg', 'Miniature Paintings', '17th Century', 'Watercolor and gold on paper', '25cm x 35cm', 'Rajasthan', 'Represents the pinnacle of Indo-Islamic artistic synthesis'),

('Radha Krishna in Garden', 'Court Artist', 'Mughal Era (1526-1857)', 'A beautiful depiction of the divine love between Radha and Krishna set in a lush garden. This painting exemplifies the Mughal tradition of combining Persian artistic techniques with Indian themes.', '/mughal-miniature-painting-of-radha-krishna-in-gard.jpg', 'Miniature Paintings', '18th Century', 'Watercolor and gold leaf on paper', '30cm x 40cm', 'Delhi', 'Sacred representation of divine love in Hindu tradition'),

('Nataraja - The Cosmic Dancer', 'Chola Artisan', 'Chola Dynasty (9th-13th Century)', 'A magnificent bronze sculpture of Lord Shiva as Nataraja, the cosmic dancer. This masterpiece represents the eternal cycle of creation and destruction in Hindu cosmology.', '/ancient-indian-bronze-nataraja-sculpture-dancing-p.jpg', 'Sculptures', '11th Century', 'Bronze', '108cm height', 'Tamil Nadu', 'Iconic representation of cosmic dance and divine energy'),

('Warli Folk Art', 'Tribal Artist', 'Traditional Folk Art', 'Traditional Warli painting featuring geometric patterns and tribal life scenes. This ancient art form uses simple geometric shapes to depict daily life, festivals, and nature worship.', '/traditional-indian-warli-folk-art-with-geometric-p.jpg', 'Folk Art', 'Traditional (ongoing)', 'Natural pigments on mud wall', '120cm x 180cm', 'Maharashtra', 'Preserves ancient tribal traditions and connection with nature'),

('Royal Court Scene', 'Mughal Master', 'Mughal Era (1526-1857)', 'An elaborate court scene depicting the grandeur of Mughal royalty with detailed architectural backgrounds and rich textile patterns. Shows the opulence and cultural sophistication of the era.', '/mughal-miniature-painting-with-intricate-details-a.jpg', 'Miniature Paintings', '16th Century', 'Watercolor, gold, and precious stones on paper', '40cm x 60cm', 'Agra', 'Documents the cultural and artistic achievements of Mughal civilization'),

('Temple Deity Sculpture', 'Temple Sculptor', 'Medieval Period (8th-15th Century)', 'Intricately carved stone sculpture of a Hindu deity from a South Indian temple. The sculpture demonstrates the exceptional skill of medieval Indian stone carvers and their devotion to divine art.', '/ancient-indian-temple-sculpture-carved-stone-deity.jpg', 'Sculptures', '12th Century', 'Granite stone', '150cm height', 'Karnataka', 'Sacred art representing divine presence in temple architecture'),

('Madhubani Painting', 'Folk Artist', 'Traditional Folk Art', 'Vibrant Madhubani painting featuring traditional motifs, nature elements, and mythological themes. This art form from Bihar is known for its bright colors and intricate patterns.', '/colorful-indian-folk-art-madhubani-painting-tradit.jpg', 'Folk Art', 'Traditional (ongoing)', 'Natural dyes on handmade paper', '60cm x 90cm', 'Bihar', 'Celebrates feminine creativity and cultural storytelling traditions'),

('Rajasthani Palace Scene', 'Rajput Artist', 'Rajput Era (7th-19th Century)', 'A magnificent Rajasthani miniature painting depicting royal palace life with vibrant colors and detailed architectural elements. Represents the artistic traditions of Rajput courts.', '/rajasthani-miniature-painting-royal-palace-scene-v.jpg', 'Miniature Paintings', '18th Century', 'Watercolor and gold on paper', '35cm x 50cm', 'Rajasthan', 'Showcases the valor and cultural richness of Rajput heritage');

-- Enable Row Level Security (RLS) for artworks
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read artworks (public gallery)
CREATE POLICY "artworks_select_all" ON public.artworks FOR SELECT USING (true);

-- Only allow authenticated users to insert/update/delete (for admin functionality later)
CREATE POLICY "artworks_insert_auth" ON public.artworks FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "artworks_update_auth" ON public.artworks FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "artworks_delete_auth" ON public.artworks FOR DELETE USING (auth.uid() IS NOT NULL);
