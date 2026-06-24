import { defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    date: z.string()
  })
});

const musicCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    file: z.string(),
    image: z.string(),
    youtubeUrl: z.string(),
    soundCloudUrl: z.string(),
    tikTokUrl: z.string(),
    twitterUrl: z.string(),
  })
})

export const collections = {
  'blog': blogCollection,
  'music': musicCollection
}