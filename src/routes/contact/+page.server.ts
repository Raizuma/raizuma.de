import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

type ProjectDataContacts = {
    ptitle: string,
    pbody: Array<ProjectDataContactsList>,  
}

type ProjectDataContactsList = {
    psubtitle: string,
    plink: string,
    ptext: string  
}

export const load: PageServerLoad = async (): Promise<{ contactData: Array<ProjectDataContacts> }> => {

    const response: Response = await fetch(`http://172.19.0.3:3001/contact`, { 
        method: "GET"
    });

    if (!response.ok) {
        console.error(`Error fetching project data: ${response.statusText}`);
        throw redirect(302, '/')
    }

    const responseData: Array<any> = await response.json();
    
    return {
        contactData: responseData
    }
}