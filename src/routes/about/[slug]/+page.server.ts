import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"


type ProjectDataPerson = {
    pname: string;
    pimage: string;
    palt: string,
    pdescription: string;
}

export const load: PageServerLoad = async ({ params  }): Promise<{ projectDataPerson: ProjectDataPerson }> => {
    const slug = params.slug;

    const response: Response = await fetch(`http://172.19.0.3:3001/about/${slug}`, { 
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