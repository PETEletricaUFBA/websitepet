import { getPostData, getAllPostIds } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import BlogSignature from '../../components/blogSignature';
import Image from '../../lib/Image';
import MembersData from '../../data/members.json';
import NomMembersData from '../../data/nom-members.json';

const Members: any = MembersData;
const NomMembers: any = NomMembersData;

export default function Post({ postData }: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    }
}): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <Content postData={postData} />

        </Layout>

    );
}


function Content({ postData }: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    }
}) {
    return (
        <div className="container post">
            <div className='col-lg-8 mx-auto'>
                <div className="title my-5 text-center">
                    <h1>{postData.title}</h1>
                    <p className='text-end fw-lighter'><Date dateString={postData.date} /></p>
                </div>
                <div className="img-fluid mb-5 overflow-hidden rounded">
                    <Image src={postData.image} alt={postData.title} layout='responsive' height="100%" width="100%" objectFit="cover" />
                </div>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {postData.authors.map((author, index) => {
                    if (Members.hasOwnProperty(author) || NomMembers.hasOwnProperty(author)) {
                        return (
                            <BlogSignature key={index.toString()} author={Members.hasOwnProperty(author) ? Members[author] : NomMembers[author]} index={index} />
                        )
                    }
                })}
                {/* TODO: Implementar plugin de comentarios */}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

