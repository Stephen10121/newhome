import { requests } from "../../../function/serverData";

export async function load(event) {
    await event.parent();

    return {
        requests
    }
}