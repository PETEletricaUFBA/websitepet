import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkImgLink from "@pondorasti/remark-img-links";

const postsDirectory = path.join(process.cwd(), 'public/cursos');


export function getSortedCursosData() {
    // Get file names under /posts
    const folderNames = fs.readdirSync(postsDirectory);
    const allCursosData = folderNames.map(folderName => {
        const file = path.join(postsDirectory, folderName, 'index.md');
        /*const teste = file.split('\\').slice(-2,-1);
        console.log(teste)*/
        const id = file.split('/').slice(-2)[0];
        const fileContents = fs.readFileSync(file, 'utf8');
        const matterResult = matter(fileContents);
        const cover : string ='/cursos/'+id+"/"+matterResult.data.cover;
        const link = `/cursos/${id}`;
        
        // Combine the data with the id
        // TODO: Implementar Summary
        return {
            id,
            link,
            image: cover,
            date: matterResult.data.date,
            title : matterResult.data.title,
            description : matterResult.data.description,
        };
    });
    // Sort posts by date
    return allCursosData.sort(({ date: a  }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllCursosIds() {
    const folderNames = fs.readdirSync(postsDirectory);

    return folderNames.map(folderName => {
        const file = path.join(postsDirectory, folderName, 'index.md');


        return {
            params: {
                id : file.split('/').slice(-2)[0]
            }
        };
    });

}

export async function getCursosData(id: string) {
    //console.log("Chegou aquiiiiiiii")
    const fullPath = path.join(postsDirectory, id, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const cover : string ='/cursos/' + id + '/' + matterResult.data.cover;

    const processedContent = await remark()
        .use(remarkHtml, {sanitize: false})
        .use(remarkGfm)
        .use(remarkImgLink, { absolutePath: process.env.BASE_URL + "/cursos/"+id+"/" })
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const link = `/cursos/${id}`;
    console.log(contentHtml)
    // Combine the data with the id
    return {
        id,
        contentHtml,
        image: cover,
        link,
        date: matterResult.data.date,
        title : matterResult.data.title,
        description : matterResult.data.description,
        authors : matterResult.data.authors,
    };
}
