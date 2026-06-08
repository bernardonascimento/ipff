import { XMLParser } from "fast-xml-parser";
import { siteConfig } from "@/config/site";

export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

type FeedEntry = {
  "yt:videoId"?: string;
  title?: string;
  published?: string;
};

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${siteConfig.youtube.channelId}`;

/**
 * Busca os últimos vídeos do canal da igreja via feed RSS público
 * (sem necessidade de API key). Usa cache do Next (ISR) revalidando a cada 1h.
 * Em caso de falha, retorna lista vazia para a seção esconder graciosamente.
 */
export async function getLatestVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);

    const rawEntries = parsed?.feed?.entry;
    if (!rawEntries) return [];

    const entries: FeedEntry[] = Array.isArray(rawEntries)
      ? rawEntries
      : [rawEntries];

    return entries
      .map((entry): YouTubeVideo | null => {
        const id = entry["yt:videoId"];
        if (!id) return null;
        return {
          id,
          title: entry.title ?? "Vídeo",
          url: `https://www.youtube.com/watch?v=${id}`,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          published: entry.published ?? "",
        };
      })
      .filter((v): v is YouTubeVideo => v !== null)
      .slice(0, limit);
  } catch {
    return [];
  }
}
