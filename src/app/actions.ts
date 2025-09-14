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
  
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log("Form submitted successfully:", result);
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      };
    } else {
      console.error("Error submitting form:", result);
      return {
        success: false,
        message: result.message || "Something went wrong. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
