import type { PageServerLoad } from "./$types"

type ProjectData = {
    plink: string,
    pimg: string,
    palt: string,
    ptitle: string,
    ptimp: string
}

export const load: PageServerLoad = async (): Promise<{ projectData: Array<ProjectData> }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const data: Array<ProjectData> = await response.json()

    return {
        projectData: data
    }
}