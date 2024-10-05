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

export const collections = { tools };