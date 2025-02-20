import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"
import { getHost } from "../../../../vite.config";

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
    const host = getHost();

    const response: Response = await fetch(`http://${host}:3001/projects/${slug}`, { 
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