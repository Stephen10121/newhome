import type { Handle } from "@sveltejs/kit";
import { pb } from "./lib/pocketbase";

export const handler: Handle = async ({ event, resolve }) => {
    console.log("init function.")
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || "");

    if (pb.authStore.isValid) {
        try {
            await pb.collection('users').authRefresh();
        } catch (_err) {
            pb.authStore.clear();
        }
    }

    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    console.log({where:"hooks", pb, clone: event.locals.user});

    const response = await resolve(event);

    response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }))

    return response;
}