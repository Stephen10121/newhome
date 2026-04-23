import { config } from "dotenv";

config();

export function load() {
    return {
        turnstileSiteKey: process.env["TURNSTILE_SITE_KEY"]!
    }
}