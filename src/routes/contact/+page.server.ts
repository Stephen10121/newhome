import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../function/contactPageSchema";

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
}

async function sendForm(name: string, from: string, about: string) {
    try {
        const data = await fetch("https://mail.gruzservices.com/sendMail", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "from": from,
                "about": about,
                "password": import.meta.env.VITE_PASSWORD
            })
        });
        const dataJson = await data.json();
        console.log(dataJson);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
    // let transporter = nodeMailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         type: "OAUTH2",
    //         user: import.meta.env.VITE_USER_EMAIL,
    //         clientId: import.meta.env.VITE_CLIENT_ID,
    //         clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    //         refreshToken: import.meta.env.VITE_REFRESH_TOKEN
    //     }
    // });

    // let info;
    // try {
    //     info = await transporter.sendMail({
    //         from: "Local Fence Co Email <test@thelocalfenceco.com>",
    //         to: "lbrandon10121@gmail.com",
    //         subject: "Testing fence.",
    //         html: data
    //     });
    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }

    // console.log(`Message sent: ${info.messageId}. URL: ${nodeMailer.getTestMessageUrl(info)}`);
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newSchema);

        if (!form.valid) {
            return fail(400, { form });
        }

        const html = `
            <h1>${form.data.name}</h1>
            <h2>${form.data.contactMethod}</h2>
            <p>${form.data.aboutContact}</p>
        `;
        console.log(html);

        console.log({form});

        return { form }
    }
}