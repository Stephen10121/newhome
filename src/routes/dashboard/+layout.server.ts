import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({cookies}) => {
    if (cookies.get("session") !== import.meta.env.VITE_ADMIN_COOKIE) throw redirect(302, "/admin");
    return { test: "wow" }
}) satisfies LayoutServerLoad;