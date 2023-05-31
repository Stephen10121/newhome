import { prisma } from "$lib/server/prisma";

export async function load(event) {
    await event.parent();

    return {
        requests: await prisma.contactRequest.findMany()
    }
}