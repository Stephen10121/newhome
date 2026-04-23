import { invalid } from "@sveltejs/kit";
import { form } from "$app/server";
import { config } from "dotenv";
import { Resend } from 'resend';
import * as v from "valibot";

config();

interface TurnstileResponse {
    success: boolean;
    "error-codes"?: string[];
    challenge_ts?: string;
    hostname?: string;
    action?: string;
}

async function verifyTurnstileToken(token: string): Promise<TurnstileResponse> {
    const SECRET_KEY = process.env["TURNSTILE_SECRET_KEY"];

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            secret: SECRET_KEY,
            response: token
        })
    });

    if (!response.ok) {
        return {
            success: false
        };
    }

    return (await response.json());
}

const ContactFormSchema = v.object({
    name: v.pipe(v.string(), v.nonEmpty("Name is required.")),
    email: v.pipe(v.string(), v.nonEmpty("Email is required."), v.email("Email is invalid.")),
    subject: v.pipe(v.string(), v.nonEmpty("Subject is required.")),
    message: v.pipe(v.string(), v.nonEmpty("Message is required.")),
    turnStileToken: v.string()
});

export const contactForm = form(ContactFormSchema, async (formData, issues) => {
    let verification: TurnstileResponse | undefined;
    try {
        verification = await verifyTurnstileToken(formData.turnStileToken);
    } catch(err) {
        invalid(issues.turnStileToken("Failed to send message. Try again later."));
    }

    if (!verification) invalid(issues.turnStileToken("Failed to send message. Try again later."));

    if (!verification.success) {
        if (verification["error-codes"]) {
            invalid(...verification["error-codes"].map((code) => issues.turnStileToken(code)))
        } else {
            invalid(issues.turnStileToken("Turnstile verification failed. Try again later."));
        }
    }

    const resend = new Resend(process.env["RESEND_KEY"]);

    try {
        const res = await resend.emails.send({
            from: `${formData.name} <contactForm@stephengruzin.dev>`,
            replyTo: formData.email,
            to: ['me@stephengruzin.dev'],
            subject: formData.subject,
            html: `<p>From: ${formData.email}</p><br><p>Message: ${formData.message}</p>`,
        });

        if (res.error) {
            console.log("Email send error", formData, res);
            invalid(issues.turnStileToken("Failed to send message. Try again later."));

        }
    } catch (err) {
        console.log(err);
        invalid(issues.turnStileToken("Failed to send message. Try again later."));
    }
});