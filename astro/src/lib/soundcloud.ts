// Build-time SoundCloud helpers.
// Resolves short share links to canonical permalinks and pulls public metadata
// via the no-auth oEmbed endpoint. Results are memoized for the build process so
// each URL is only fetched once, and failures fall back to frontmatter so an
// offline build still succeeds.

export interface RawTrack {
  /** Short (on.soundcloud.com/...) or full soundcloud.com permalink. */
  soundCloudUrl: string;
  order: number;
  tag?: string;
  note?: string;
  title?: string;
  duration?: string;
  image?: string;
  youtubeUrl?: string;
  id: string;
}

export interface Track {
  id: string;
  order: number;
  title: string;
  tag: string;
  note: string;
  duration: string;
  artwork: string;
  permalink: string;
  widgetUrl: string;
  youtubeUrl: string;
}

const memo = new Map<string, any>();

async function memoFetchJson(url: string): Promise<any | null> {
  if (memo.has(url)) return memo.get(url);
  try {
    const res = await fetch(url);
    const data = res.ok ? await res.json() : null;
    memo.set(url, data);
    return data;
  } catch {
    memo.set(url, null);
    return null;
  }
}

async function resolvePermalink(url: string): Promise<string> {
  const cacheKey = "resolve:" + url;
  if (memo.has(cacheKey)) return memo.get(cacheKey);
  let resolved = url;
  if (url.includes("on.soundcloud.com")) {
    try {
      const res = await fetch(url, { method: "GET", redirect: "follow" });
      resolved = res.url || url;
    } catch {
      resolved = url;
    }
  }
  resolved = resolved.split("?")[0];
  memo.set(cacheKey, resolved);
  return resolved;
}

function buildWidgetUrl(permalink: string): string {
  const params = new URLSearchParams({
    url: permalink,
    color: "6f9a45",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "false",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

async function enrich(raw: RawTrack): Promise<Track> {
  const permalink = await resolvePermalink(raw.soundCloudUrl);
  const oembed = await memoFetchJson(
    `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(permalink)}`,
  );

  // oEmbed titles look like "Track Name by Author" — strip the author suffix.
  let title = raw.title ?? "";
  if (!title && oembed?.title) {
    title = String(oembed.title).replace(/\s+by\s+.+$/i, "").trim();
  }
  if (!title) title = "Untitled";

  // SoundCloud artwork comes back at -t500x500; bump to original where possible.
  let artwork = raw.image ?? "";
  if (!artwork && oembed?.thumbnail_url) {
    artwork = String(oembed.thumbnail_url).replace("-t500x500", "-t500x500");
  }

  return {
    id: raw.id,
    order: raw.order,
    title,
    tag: raw.tag ?? "track",
    note: raw.note ?? "",
    duration: raw.duration ?? "",
    artwork,
    permalink,
    widgetUrl: buildWidgetUrl(permalink),
    youtubeUrl: raw.youtubeUrl ?? "",
  };
}

/** Resolve a list of raw track records into player-ready tracks, sorted by order. */
export async function resolveTracks(raws: RawTrack[]): Promise<Track[]> {
  const tracks = await Promise.all(raws.map(enrich));
  return tracks.sort((a, b) => a.order - b.order);
}
