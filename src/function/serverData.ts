export interface ContactRequest {
    name: string;
    email: string;
    about: string;
    when: string;
}


export const requests: ContactRequest[] = [];

export function addRequest(request: ContactRequest) {
    requests.push(request);
}