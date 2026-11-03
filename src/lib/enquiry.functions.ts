import { createServerFn } from "@tanstack/react-start";

import { enquirySchema } from "./enquiry";

/**
 * Public endpoint: stores website enquiries in the database.
 * Validation happens here again — never trust the browser.
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("enquiries").insert({
        full_name: data.fullName,
        company: data.company || null,
        email: data.email,
        phone: data.phone || null,
        service: data.service,
        details: data.details,
      });
      if (error) {
        console.error("Enquiry insert failed:", error.message);
        return {
          ok: false as const,
          message: "Something went wrong while sending your enquiry. Please try again.",
        };
      }
      return { ok: true as const };
    } catch (err) {
      console.error("Enquiry submission error:", err);
      return {
        ok: false as const,
        message: "Something went wrong while sending your enquiry. Please try again.",
      };
    }
  });
