import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

type ProjectDataAbout = {
    ptext: String
}

type ProjectDataAboutPerson = {
    ptitle: string,
    pname: string,
    pimg: string,
    palt: string,
}


export const load: PageServerLoad = async (): Promise<{ aboutData: Array<ProjectDataAbout>, aboutPerson: Array<ProjectDataAboutPerson>}> => {

    const response: Response = await fetch(`http://172.19.0.3:3001/about`, { 
        method: "GET"
    });

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const responseData: Array<Array<any>> = await response.json();
    const projectDataAbout: Array<ProjectDataAbout> = responseData[0];
    const projectDataAboutPerson: Array<ProjectDataAboutPerson> = responseData[1];
    
    return {
        aboutData: projectDataAbout,
        aboutPerson: projectDataAboutPerson
    }
}