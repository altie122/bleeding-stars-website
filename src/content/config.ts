import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const updates = defineCollection({
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      authors: z.array(z.string()),
      footnote: z.string().optional(),
      isDraft: z.boolean(),
      socialImage: z.string().optional(),
      coverImage: z.string().optional(),
    })
    .transform((study) => ({ ...study, isUpdate: true })),
});

const meetingarchive = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
    videoURLs: z.object({
      youtube: z.string().optional(),
      uploadthing: z.string(),
    }),
    important: z.boolean().optional(),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    username: z.string(),
    role: z.array(z.string()),
    voiced: z.array(z.string()).optional(),
    pfp: z.string().default("/src/content/authors/_images/default.png"),
    isArchived: z.boolean(), // This is to archive team members who no longer work on the project
  })
});

export const collections = {
  blog, 
  authors, 
  updates,
  meetingarchive,
};