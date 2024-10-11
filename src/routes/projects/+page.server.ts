import type { PageServerLoad } from "./$types"

type ProjectData = {
    projects: Array<any>
}

export const load: PageServerLoad = async ({ slug  }): Promise<{ projectData: ProjectData }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/projects/`, {
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