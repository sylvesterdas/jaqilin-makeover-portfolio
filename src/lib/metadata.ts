import type { Metadata } from "next";

type SocialMetadataOptions = {
  title?: string;
  description?: string;
  url?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  locale?: string;
  type?: "website" | "article";
};

export const OG_IMAGE_URL =
  "https://www.jaqilinmakeover.com/images/og/og-main-1200x630.jpg";
export const OG_IMAGE_SQUARE_URL =
  "https://www.jaqilinmakeover.com/images/og/og-main-1200x1200.jpg";

export const OG_DEFAULT_TITLE =
  "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover";
export const OG_DEFAULT_DESCRIPTION =
  "Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling and saree draping. Home and venue service. Book on WhatsApp.";

export function buildSocialMetadata(
  options: SocialMetadataOptions = {},
): Pick<Metadata, "openGraph" | "twitter"> {
  const {
    title = OG_DEFAULT_TITLE,
    description = OG_DEFAULT_DESCRIPTION,
    url = "https://www.jaqilinmakeover.com",
    images,
    locale = "en_IN",
    type = "website",
  } = options;

  const resolvedImages =
    images && images.length > 0
      ? images
      : [
          {
            url: OG_IMAGE_URL,
            width: 1200,
            height: 630,
            alt: "Bridal Makeup Artist in Thiruvananthapuram",
          },
          {
            url: OG_IMAGE_SQUARE_URL,
            width: 1200,
            height: 1200,
            alt: "Bridal Makeup Artist in Thiruvananthapuram",
          },
        ];

  return {
    openGraph: {
      title,
      description,
      url,
      siteName: "Jaqilin Makeover",
      images: resolvedImages,
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImages[0]?.url ?? OG_IMAGE_URL],
      creator: "@jaqilinmua",
    },
  };
}
