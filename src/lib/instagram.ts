export interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  media_type: string
  thumbnail_url?: string
  children?: {
    data: InstagramChild[]
  }
}

export interface InstagramChild {
  id: string
  media_url: string
  media_type: string
  thumbnail_url?: string
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.IG_TOKEN?.trim()

  if (!token) {
    console.warn("getInstagramPosts: IG_TOKEN environment variable is not configured.")
    return []
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type,thumbnail_url,children{media_url,media_type,thumbnail_url}&limit=50&access_token=${token}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error("getInstagramPosts: Meta API request failed:", res.status, err)
      return []
    }

    const data = await res.json()
    return data.data ?? []
  } catch (error) {
    console.error("getInstagramPosts: Failed to fetch Instagram media:", error)
    return []
  }
}
