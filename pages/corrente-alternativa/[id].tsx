import Header from '../../components/header'
import Footer from '../../components/footer'
import { getPostData, getAllPostIds } from '../../lib/posts';


export default function Post({ postData }) {
    return (<div>
        <Header />

        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />


        <Footer />
    </div>);
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

