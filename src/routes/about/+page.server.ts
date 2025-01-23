import type { PageServerLoad } from "./$types"

type ProjectDataAbout = {
    ptext: String
}

export const load: PageServerLoad = async (): Promise<{ aboutData: ProjectDataAbout}> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/about/`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const responseData: ProjectDataAbout = await response.json();
    
    return {
        aboutData: responseData
    }
}