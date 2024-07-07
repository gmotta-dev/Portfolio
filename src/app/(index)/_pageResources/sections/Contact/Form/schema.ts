import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

export default contactFormSchema;
