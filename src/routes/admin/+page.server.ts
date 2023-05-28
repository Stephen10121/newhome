import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { dev } from '$app/environment';

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        
        const passCode = formData.get("password");

        if (!passCode) throw error(400, "Missing Parameters.");
        console.log(import.meta.env.VITE_ADMIN_PASSWORD);
        if (passCode !== import.meta.env.VITE_ADMIN_PASSWORD) throw error(401, "Invalid Password");
        cookies.set('session', import.meta.env.VITE_ADMIN_COOKIE, {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            secure: !dev
        });
        throw redirect(302, '/dashboard');
    }
} satisfies Actions;
 

export async function load({ cookies }) {
    if (cookies.get("session") === import.meta.env.VITE_ADMIN_COOKIE) throw redirect(302, "/dashboard");
    return { test: "wow" }
}