import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const folderNames = fs.readdirSync(postsDirectory);
    const allPostsData = folderNames.map(folderName => {
        const file = path.join(postsDirectory, folderName, 'index.md');
        const id = file.split('/').slice(-2, -1)[0];

        const fileContents = fs.readFileSync(file, 'utf8');
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllPostIds() {
    const folderNames = fs.readdirSync(postsDirectory);

    return folderNames.map(folderName => {
        const file = path.join(postsDirectory, folderName, 'index.md');


        return {
            params: {
                id: file.split('/').slice(-2, -1)[0]
            }
        };
    });

}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, id, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
        
    const contentHtml = processedContent.toString();


    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
