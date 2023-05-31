import { dev } from "$app/environment";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
console.log('nice')
if (dev) {
    global.prisma = prisma;
}

export { prisma }