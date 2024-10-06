import { defineCollection, z } from "astro:content";

const tools = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        url: z.string().url(),
        paid: z.boolean(),
    })
})

const languages = defineCollection({
    schema: z.object({
        title: z.string(),
        destination: z.string(),
        difficulty: z.string(),
        description: z.string(),
        img: z.string(),
        docs: z.string().url(),
    })
})

export const collections = { tools, languages };