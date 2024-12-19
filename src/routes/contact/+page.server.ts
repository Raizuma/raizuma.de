import type { PageServerLoad } from "./$types"

type ProjectDataContacts = {
    ptitle: string,
    psubtitle: string,
    plink: string,
    ptext: string
}

export const load: PageServerLoad = async (): Promise<{ data: ProjectDataContacts }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/contact`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const responseData: ProjectDataContacts = await response.json();
    
    return {
        data: responseData
    }
}