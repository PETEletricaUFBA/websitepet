import Image from '../lib/Image';
import { getSortedCursosData } from '../lib/cursos';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
    const allCursosData = await getSortedCursosData();
    return {
        props: {
            allCursosData,
        },
    };
}

export default function Cursos({ allCursosData }: {
    allCursosData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
        description: string;
    }[]
}) {
    return (
        <Layout>
            <Title />
            {/*<Featured featuredPost={allCursosData[0] } />*/}
            <Pages allCursosData={allCursosData} />
        </Layout>
    );
}
const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Cursos & Videoaulas</h1>
        </div>
    </section>

);

function Pages({ allCursosData }: {
    allCursosData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
        description: string;
    }[]
}) {
    if (!allCursosData || allCursosData.length === 0) {
        return <div>Nenhum Curso encontrado</div>;
    }
    return (
        <section className="Section ">
            <div className="container text-center ">
                <div className="row alinha-centro border-8">
                    {allCursosData.map(({id, title,description, image, link }, index) => (
                        <div className="col-lg-4 col-sm-6 mb-5 " key={index.toString()}>
                            <div className="card">
                                <div className="card-img rounded-lg mb-4 overflow-hidden position-relative">
                                    <Image src={image} alt={title} 
                                    layout='fill' 
                                    height="90%" width="90%" 
                                    objectFit="cover" />
                                </div>
                                <div className="card-body p-0">
                                    <h3>
                                        <Link href={link} passHref>
                                            <a title={title} className="post-title">{title}</a>
                                        </Link>
                                    </h3>
                                    <h5>
                                        <a title={description} className="post-description">{description}</a>                                       
                                    </h5>

                                    {/* <p className="card-text">{summary}</p> */}
                                    <Link href={link} passHref>
                                        <a title="readmore" className="btn btn-primary espaco-abaixo btn-sm">Saiba Mais </a>
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
