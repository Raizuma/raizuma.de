import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

type ProjectDataProjects = {
    ptitle: string,
    pname: string,
    pimg: string,
    palt: string,
}

export const load: PageServerLoad = async (): Promise<{ projectData: Array<ProjectDataProjects> }> => {


    const response: Response = await fetch(`http://172.19.0.3:3001/projects`, { 
        method: "GET"
    });

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const data: Array<ProjectDataProjects> = await response.json()

    return {
        projectData: data
    }
}