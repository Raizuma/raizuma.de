import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

type ProjectDataNewProjects = {
    plink: string,
    pimg: string,
    palt: string,
    ptitle: string,
    ptimp: string
}

type ProjectDataNewsFeed = {
    nimg: string,
    ntitle: string,
    ntimp: string,
    ntext: string
}

export const load: PageServerLoad = async (): Promise<{ projectDataNewProjects: Array<ProjectDataNewProjects>, projectDataNewsFeed: Array<ProjectDataNewsFeed> }> => {

    const response: Response = await fetch(`http://api.raizuma.local:3000/`, {
        method: "GET"
    })

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const responseData: Array<Array<any>> = await response.json();
    const dataNewProjects: Array<ProjectDataNewProjects> = responseData[0];
    const dataNewsFeed: Array<ProjectDataNewsFeed> = responseData[1];
    
    return {
        projectDataNewProjects: dataNewProjects,
        projectDataNewsFeed: dataNewsFeed
    }
}