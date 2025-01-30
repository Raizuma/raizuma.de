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

    const response: Response = await fetch(`http://api.raizuma.local:3000/about/`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Boah, da ist was kaputt: ${response.statusText}`)
    }

    const responseData: Array<Array<any>> = await response.json();
    const projectDataAbout: Array<ProjectDataAbout> = responseData[0];
    const projectDataAboutPerson: Array<ProjectDataAboutPerson> = responseData[1];
    
    return {
        aboutData: projectDataAbout,
        aboutPerson: projectDataAboutPerson
    }
}