import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../function/contactPageSchema";
import { addRequest } from "../../../function/serverData";

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
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

        const d = new Date(); 
        const datetime = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}. ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

        addRequest({
            name: form.data.name,
            about: form.data.aboutContact,
            email: form.data.contactMethod,
            when: datetime
        });

        event.setHeaders({'Access-Control-Allow-Origin': `*`});
        
        return { form }
    }
}