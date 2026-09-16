import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const learn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stage: z.enum(['Before you buy', 'During your purchase', 'Owning and renewing', 'Special situations']),
    author: z.enum(['cristina-acosta', 'juan-acosta', 'sheryl-beaver']),
    published: z.coerce.date(),
    verified: z.coerce.date(),
    tool: z.string().optional(),
    situation: z.string().optional(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    verify: z.array(z.string()).default([]),
  }),
});

export const collections = { learn };
