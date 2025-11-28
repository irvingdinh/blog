import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const posts = defineCollection({
    loader: glob({pattern: '**/index.md', base: './src/content/posts'}),
    schema: z.object({
        date: z.coerce.date(),
        title: z.string().optional(),
        tags: z.array(z.string()).optional().default([]),
    }),
});

const articles = defineCollection({
    loader: glob({pattern: '**/index.md', base: './src/content/articles'}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional().default([]),
        description: z.string().optional(),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {posts, articles};
