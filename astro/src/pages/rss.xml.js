import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: new Date(post.data.date),
        link: `/blog/${post.id}/`,
      })),
  });
}
