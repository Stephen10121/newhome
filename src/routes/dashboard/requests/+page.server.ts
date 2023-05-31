import { prisma } from "$lib/server/prisma";
import { fail, redirect } from "@sveltejs/kit";

export async function load(event) {
    await event.parent();

    return {
        requests: await prisma.contactRequest.findMany()
    }
}

export const actions = {
    delete: async (event) => {
        event.setHeaders({'Access-Control-Allow-Origin': `*`});
        if (event.cookies.get("session") !== import.meta.env.VITE_ADMIN_COOKIE) throw redirect(302, "/admin");

        const data = await event.request.formData();
        const requestId = data.get("id") as string;

        if (!requestId) return fail(409, { message: "Id for request not found." });

        try {
            await prisma.contactRequest.delete({ where: {
                id: parseInt(requestId)
            } })
        } catch (_err) {
            return fail(409, { message: "Id for request not found." })
        }

        return {
            requests: await prisma.contactRequest.findMany(),
            message: "Success"
        }
    }
}