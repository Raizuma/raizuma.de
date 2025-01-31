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
}

export const load: PageServerLoad = async ({ params  }): Promise<{ projectData: ProjectData }> => {
    console.log(params.slug);
    const slug = params.slug;

    const response: Response = await fetch(`http://api.raizuma.local:3000/about/${slug}`, {
        method: "GET"
    })

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const data: ProjectData = await response.json()

    return {
        projectData: data
    }
}