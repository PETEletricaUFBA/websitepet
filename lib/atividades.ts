import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkImgLink from "@pondorasti/remark-img-links";

const postsDirectory = path.join(process.cwd(), 'public/atividades');


export function getSortedAtividadesData() {
    // Get file names under /posts
    const folderNames = fs.readdirSync(postsDirectory);
    const allAtividadesData = folderNames.map(folderName => {
        const file = path.join(postsDirectory, folderName, 'index.md');
        /*const teste = file.split('\\').slice(-2,-1);
        console.log(teste)*/
        const id = file.split('/').slice(-2)[0];
        const fileContents = fs.readFileSync(file, 'utf8');
        const matterResult = matter(fileContents);
        const cover : string ='/atividades/'+id+"/"+matterResult.data.cover;
        const link = `/atividades/${id}`;
        
        // Combine the data with the id
        // TODO: Implementar Summary
        return {
            id,
            link,
            image: cover,
            title : matterResult.data.title,
            posicao: matterResult.data.posicao,
            description : matterResult.data.description,
            status : matterResult.data.status,
        };
    });
    // Sort posts by posicao
    return allAtividadesData.sort(({ posicao: a  }, { posicao: b }) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllAtividadesIds() {
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

export async function getAtividadesData(id: string) {
    //console.log("Chegou aquiiiiiiii")
    const fullPath = path.join(postsDirectory, id, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const cover : string ='/atividades/' + id + '/' + matterResult.data.cover;

    const processedContent = await remark()
        .use(remarkHtml, {sanitize: false})
        .use(remarkGfm)
        .use(remarkImgLink, { absolutePath: process.env.BASE_URL + "/atividades/"+id+"/" })
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const link = `/atividades/${id}`;
    console.log(contentHtml)
    // Combine the data with the id
    return {
        id,
        contentHtml,
        image: cover,
        link,
        title : matterResult.data.title,
        description : matterResult.data.description,
        status : matterResult.data.status,
    };
}
