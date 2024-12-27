import { z } from 'zod'

const envSchema = z.object({
    VITE_API_URL: z.string().url(),
    VITE_API_WITH_DELAY: z.string().optional().transform((value) => value === 'true'),
})

console.log(import.meta.env)

export const env = envSchema.parse(import.meta.env)