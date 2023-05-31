import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../function/contactPageSchema";
import { prisma } from "$lib/server/prisma";

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
        event.setHeaders({'Access-Control-Allow-Origin': `*`});
        const form = await superValidate(event, newSchema);

        if (!form.valid) {
            return fail(400, { form });
        }

        const d = new Date(); 
        const datetime = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}. ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        
        try {
            await prisma.contactRequest.create({
                data: {
                    name: form.data.name,
                    email: form.data.contactMethod,
                    about: form.data.aboutContact,
                    time: datetime
                }
            });
        } catch (err) {
            console.log(err)
            return fail(400, { form });
        }
        
        return { form }
    }
}