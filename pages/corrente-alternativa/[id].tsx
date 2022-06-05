import { getPostData, getAllPostIds } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <Content postData={postData} />

        </Layout>

    );
}


function Content({ postData }) {
    return (
        <div className="container">
            <div className='col-lg-8 mx-auto'>
                <br />
                <p className='text-end fw-lighter'><Date dateString={postData.date} /></p>
                <br />
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

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

