import { redirect } from "@sveltejs/kit";
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
    versions: Array<JSON>;
}

export const load: PageServerLoad = async ({ params  }): Promise<{ projectData: ProjectData }> => {
    const slug = params.slug;

    const response: Response = await fetch(`http://172.19.0.3:3001/projects/${slug}`, { 
        method: "GET"
    });

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const data: ProjectData = await response.json()

    return {
        projectData: data
    }


}