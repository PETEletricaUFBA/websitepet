import { getPostData, getAllPostIds } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image';

export default function Post({ postData }: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
    }
}) {
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
    }
}) {
    return (
        <div className="container">
            <div className='col-lg-8 mx-auto'>
                <div className="title my-6">
                    <h1>{postData.title}</h1>
                    <p className='text-end fw-lighter'><Date dateString={postData.date} /></p>
                </div>
                <div className="img-fluid">
                    <Image src={postData.image} alt={postData.title} layout='responsive' height="100%" width="100%" objectFit="cover" />
                </div>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

