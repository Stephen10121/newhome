import { dev } from "$app/environment";
import { redirect } from "@sveltejs/kit";

export async function load({cookies}) {
    console.log("somethign");
    // cookies.delete("session", {
    //     path: "/"
    // });
    cookies.set('session', "", {
        path: '/',
        httpOnly: false,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30,
        secure: !dev
    });
    throw redirect(302, "/");
}