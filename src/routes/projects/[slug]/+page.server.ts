import type { PageServerLoad } from "./$types"

type ProjectData = {
    title: string;
    downloadlink: string;
    developer: string;
    publisher: string;
    date: string;
    orglanguage: string;
    usk: string;
    pimage: string;
    description: string;
}

export const load: PageServerLoad = async ({ slug  }): Promise<{ projectData: ProjectData }> => {
    console.log(slug)

    const response: Response = await fetch(`http://api.raizuma.local:3000/projects/${slug}`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const data: ProjectData = await response.json()

    return {
        projectData: data
    }
}