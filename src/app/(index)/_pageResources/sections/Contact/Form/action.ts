"use server";

import { z } from "zod";
import contactFormSchema from "./schema";
import Email from "./Email";
import nodemailer from "nodemailer";
import { TToast } from "@/shared/components/Toast/types";
import customLog from "@/shared/util/custom-logs";

const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD } });

export default async function contactAction(req: z.infer<typeof contactFormSchema>): Promise<{ status: 200 | 500; toast: TToast }> {
  try {
    customLog.startLogProcess("START CONTACT ACTION");

    const body = contactFormSchema.parse(req);
    customLog.debug("Body: ", body);

    const { renderToString } = await import("react-dom/server");
    const html = renderToString(Email(body));

    const emailRes = await transporter.sendMail({ from: process.env.EMAIL_USER, to: 'gabriel.pmtt@proton.me', subject: `Contato - ${body.email}`, html });
    customLog.debug("Email Response: ", emailRes);
    customLog.endLogProcess("END CONTACT ACTION");

    return { status: 200, toast: { title: "Email Sent", description: "I'll get back to you soon", stylization: { variant: "success" } } };
  } catch (error) {
    customLog.error("Error: ", error);
    customLog.endLogProcess("END CONTACT ACTION");

    return { status: 500, toast: { title: "Oops!", description: "Something went wrong", stylization: { variant: "error" } } };
  }
}
