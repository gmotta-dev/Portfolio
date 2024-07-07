"use server";

import { z } from "zod";
import contactFormSchema from "./schema";
import Email from "./Email";
import nodemailer from "nodemailer";
import { TToast } from "@/shared/components/Toast/types";

const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD } });

export default async function contactAction(req: z.infer<typeof contactFormSchema>): Promise<{ status: 200 | 500; toast: TToast }> {
  try {
    console.log("START CONTACT ACTIONN ---------->");

    const body = contactFormSchema.parse(req);
    console.log("\nBody: ", body);

    const { renderToString } = await import("react-dom/server");
    const html = renderToString(Email(body));

    const emailRes = await transporter.sendMail({ from: body.email, to: process.env.EMAIL_USER, subject: `Contato - ${body.email}`, html });
    console.log("\nEmail Response: ", emailRes);
    console.log("\nEND CONTACT ACTION <----------");

    return { status: 200, toast: { title: "Email Sent", description: "I'll get back to you soon", stylization: { variant: "success" } } };
  } catch (error) {
    console.log("\nError: ", error);
    console.log("\nEND CONTACT ACTION <----------");

    return { status: 500, toast: { title: "Oops!", description: "Something went wrong", stylization: { variant: "error" } } };
  }
}
