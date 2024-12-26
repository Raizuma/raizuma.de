import type { PageServerLoad } from "./$types"

type ProjectDataProjects = {
    ptitle: string,
    pname: string,
    pimg: string,
    palt: string,
}

export const load: PageServerLoad = async (): Promise<{ projectData: Array<ProjectDataProjects> }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/projects/`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const data: Array<ProjectDataProjects> = await response.json()

    return {
        projectData: data
    }
}