import { describe, expect, it } from "vitest";

import { enquirySchema, SERVICE_OPTIONS } from "@/lib/enquiry";

describe("enquiry form rules", () => {
  it("offers all eight services plus Studio Rental and Other", () => {
    const core = SERVICE_OPTIONS.filter(
      (s) => s !== "Studio Rental" && s !== "Other",
    );
    expect(core).toHaveLength(8);
    expect(SERVICE_OPTIONS).toContain("Studio Rental");
    expect(SERVICE_OPTIONS).toContain("Other");
  });

  it("never lists website design and development", () => {
    expect(
      SERVICE_OPTIONS.some((s) => s.toLowerCase().includes("website")),
    ).toBe(false);
  });

  it("rejects an invalid enquiry", () => {
    const parsed = enquirySchema.safeParse({
      fullName: "",
      company: "",
      email: "not-an-email",
      phone: "",
      service: "Interior Decoration",
      details: "hi",
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts a valid enquiry without a phone number", () => {
    const parsed = enquirySchema.safeParse({
      fullName: "Sudhi Kumaran",
      company: "",
      email: "owner@gyroz.example",
      phone: "",
      service: "Studio Rental",
      details: "We need a podcast recording session next week.",
    });
    expect(parsed.success).toBe(true);
  });
});
