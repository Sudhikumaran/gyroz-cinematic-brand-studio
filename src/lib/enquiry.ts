import { z } from "zod";

/** Exactly the eight services the studio offers, plus Studio Rental and Other. */
export const SERVICE_OPTIONS = [
  "Ad Film Production",
  "Podcast Production",
  "Reels & Video Production",
  "Personal Branding",
  "Social Media Management",
  "Digital Marketing",
  "Model & Product Photoshoots",
  "Model & Product Video Shoots",
  "Studio Rental",
  "Other",
] as const;

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS, { message: "Please choose a service" }),
  details: z
    .string()
    .trim()
    .min(10, "Tell us a little about your project")
    .max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
