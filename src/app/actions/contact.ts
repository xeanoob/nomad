"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "contactpro.nomad@gmail.com";

export async function sendContactEmail(formData: FormData) {
    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        // Support metadata from booking form
        date: formData.get("date"),
        location: formData.get("location"),
    };

    console.log("Envoi de l'email via Resend...");

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev', // Simplified from for initial test
            to: OWNER_EMAIL,
            subject: `[NOMAD Web] ${rawFormData.subject || "Nouveau Message"}`,
            text: `
Nom / Structure: ${rawFormData.name}
Email: ${rawFormData.email}
Sujet: ${rawFormData.subject}
${rawFormData.date ? `Date: ${rawFormData.date}` : ""}
${rawFormData.location ? `Lieu: ${rawFormData.location}` : ""}

Message:
${rawFormData.message}
            `.trim(),
        });

        if (error) {
            console.error("DEBUG Resend Error:", error);
            return { success: false, error: error.message };
        }

        console.log("DEBUG Resend Success:", data);
        return { success: true };
    } catch (e: any) {
        console.error("DEBUG Exception d'envoi d'email:", e);
        return { success: false, error: e?.message || "Erreur inconnue" };
    }
}

export async function subscribeNewsletter(email: string) {
    console.log("Inscription Newsletter via Resend...");

    try {
        // 1. Add to Resend Contacts (Audience)
        // Note: This uses the default audience if none is specified or if you have only one.
        // If you create a specific audience, you'll need its ID.
        await resend.contacts.create({
            email: email,
            unsubscribed: false,
            audienceId: process.env.RESEND_AUDIENCE_ID || '', // Fallback to default or empty
        });

        // 2. Still send the notification email
        const { error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: OWNER_EMAIL,
            subject: `[Newsletter] Nouvelle inscription`,
            text: `Nouvelle inscription à la newsletter : ${email}`,
        });

        if (error) {
            console.error("DEBUG Resend Email Error (Newsletter):", error);
            // We return success anyway because the contact was likely added
        }

        return { success: true };
    } catch (e: any) {
        console.error("DEBUG Exception Newsletter:", e);
        // If the contact already exists, Resend might throw an error, we should handle it
        if (e?.message?.includes('already exists')) {
            return { success: true, message: "Déjà inscrit" };
        }
        return { success: false, error: e?.message };
    }
}
