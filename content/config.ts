import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),

  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    pfp: z.string().url().default("bleedingstars.dovahkiin.xyz/content/authors/default.png"),
  })
});

export const collections = {
  blog, authors
};