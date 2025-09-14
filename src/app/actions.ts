"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.message?.join(", ") || "Invalid data.",
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just simulate a successful submission.
  console.log("Form submitted successfully:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
