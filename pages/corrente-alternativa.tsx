import Image from 'next/image';

import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Layout from '../components/layout';
import pic from '../posts/2021-06-03-o-desastre-de-chernobyl-como-a-negligencia-erros-humanos-e-de-projeto-levaram-ao-maior-desastre-nuclear-da-historia-da-humanidade/images/chernobyl4.jpg';

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function CorrenteAlternativa({ allPostsData }: {
    allPostsData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
    }[]
}) {
    return (
        <Layout>
            <Title />
            <Featured featuredPost={allPostsData[0]} />
            <Pages allPostsData={allPostsData} />
        </Layout>
    );
}

const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Corrente Alternativa</h1>
        </div>
    </section>

);

function Featured({ featuredPost }: {
    featuredPost: {
        id: string; link: string; image: string; date: any; title: string;
    }
}): JSX.Element {
    return (
        <section className="section">
            <div className="container">
                <div className="col-12 mb-5 pb-5">
                    <div className="row align-items-center">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <div className="img-fluid rounded-lg w-100 overflow-hidden" >
                                <Image src={featuredPost.image} alt={featuredPost.title}
                                    layout='responsive'
                                    height="100%" width="100%" 
                                    objectFit="cover" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>
                                <Link href={featuredPost.link} passHref>
                                    <a href={featuredPost.link} title={featuredPost.title} className="post-title">{featuredPost.title}</a>
                                </Link>
                            </h2>
                            {/* <p className="card-text">{featuredPost.summary}</p> */}
                            <Link href={featuredPost.link} passHref>
                                <button title="readmore" className="btn btn-primary"> Leia Mais </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Pages({ allPostsData }: {
    allPostsData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
    }[]
}) {
    return (
        <section className="Section">
            <div className="container">
                <div className="row">
                    {allPostsData.map(({ title, image, link }, index) => (
                        <div className="col-lg-4 col-sm-6 mb-5" key={index.toString()}>
                            <div className="card border-0">
                                <div className="card-img rounded-lg mb-4 overflow-hidden">
                                    <Image src={image} alt={title} 
                                    layout='responsive' 
                                    height="100%" width="100%" 
                                    objectFit="cover" />
                                </div>
                                <div className="card-body p-0">
                                    <h3>
                                        <Link href={link} passHref>
                                            <a title={title} className="post-title">{title}</a>
                                        </Link>
                                    </h3>

                                    {/* <p className="card-text">{summary}</p> */}
                                    <Link href={link} passHref>
                                        <a title="readmore" className="btn btn-primary btn-sm">Leia Mais </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

