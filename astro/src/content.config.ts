import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    date: z.string(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default(["track"]),
    order: z.number().default(0),
    duration: z.string().optional(),
    image: z.string().optional(),
    soundCloudUrl: z.string().default(""),
    youtubeUrl: z.string().optional(),
    file: z.string().optional(),
    tikTokUrl: z.string().optional(),
    twitterUrl: z.string().optional(),
  }),
});

export const collections = { blog, music };
