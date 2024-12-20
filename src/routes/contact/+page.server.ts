import type { PageServerLoad } from "./$types"

type ProjectDataContacts = {
    ptitle: string,
    pbody: Array<ProjectDataContactsList>,  
}

type ProjectDataContactsList = {
    psubtitle: string,
    plink: string,
    ptext: string  
}

export const load: PageServerLoad = async (): Promise<{ contactData: Array<ProjectDataContacts> }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/contact`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const responseData: Array<any> = await response.json();
    
    return {
        contactData: responseData
    }
}