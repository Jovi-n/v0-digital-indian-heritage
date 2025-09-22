-- Create likes table to track user likes on artworks
CREATE TABLE IF NOT EXISTS public.artwork_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, artwork_id)
);

-- Enable Row Level Security (RLS) for likes
ALTER TABLE public.artwork_likes ENABLE ROW LEVEL SECURITY;

-- Users can only see their own likes
CREATE POLICY "likes_select_own" ON public.artwork_likes FOR SELECT USING (auth.uid() = user_id);

-- Users can only insert their own likes
CREATE POLICY "likes_insert_own" ON public.artwork_likes FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own likes
CREATE POLICY "likes_delete_own" ON public.artwork_likes FOR DELETE USING (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_artwork_likes_user_id ON public.artwork_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_artwork_likes_artwork_id ON public.artwork_likes(artwork_id);
