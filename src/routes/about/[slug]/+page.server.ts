import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

type ProjectDataPerson = {
    pname: string;
    pimage: string;
    palt: string,
    pdescription: string;
}

export const load: PageServerLoad = async ({ params  }): Promise<{ projectDataPerson: ProjectDataPerson }> => {
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
        projectDataPerson: data
    }
}