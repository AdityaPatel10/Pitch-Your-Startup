import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contains at least 3 characters" })
    .max(100),
  description: z
    .string()
    .min(20, { message: "Description must contains at least 20 characters" })
    .max(500),
  category: z
    .string()
    .min(3, { message: "Category must contains at least 3 characters" })
    .max(50),
  link: z
    .string()
    .url({ message: "Please enter a valid url " })
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z
    .string()
    .min(10, { message: "Pitch must contains at least 10 characters" }),
});
