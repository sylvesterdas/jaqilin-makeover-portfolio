export interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  media_type: string
  thumbnail_url?: string
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type,thumbnail_url&limit=50&access_token=${process.env.IG_TOKEN}`,
    { next: { revalidate: 3600 } }
  )

  const data = await res.json()

  return data.data ?? []
}