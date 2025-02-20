import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"
import { getHost } from "../../../../vite.config";

type ProjectDataPerson = {
    pname: string;
    pimage: string;
    palt: string,
    pdescription: string;
}

export const load: PageServerLoad = async ({ params  }): Promise<{ projectDataPerson: ProjectDataPerson }> => {
    const slug = params.slug;
    const host = getHost();

    const response: Response = await fetch(`https://api.raizuma.de/about/${slug}`, { 
        method: "GET"
    });

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const data: ProjectDataPerson = await response.json()

    return {
        projectDataPerson: data
    }
}