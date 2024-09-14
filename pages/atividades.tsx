import Image from '../lib/Image';
import { getAtividadesData, getSortedAtividadesData } from '../lib/atividades';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
    const allAtividadesData = await getSortedAtividadesData();
    return {
        props: {
            allAtividadesData,
        },
    };
}

export default function Atividades({ allAtividadesData }: {
    allAtividadesData: {
        id: string;
        link: string;
        image: string;
        title: string;
        description: string;
        status: string;
    }[]
}) {
    return (
        <Layout>
            <Title />
            {/*<Featured featuredPost={allAtividadesData[0] } />*/}
            <Pages allAtividadesData={allAtividadesData} />
            <Title2 />
            {/*<Featured featuredPost={allAtividadesData[0] } />*/}
            <Pages2 allAtividadesData={allAtividadesData} />
        </Layout>
    );
    
}
const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Ativas</h1>
        </div>
    </section>

);

function Pages({ allAtividadesData }: {
    allAtividadesData: {
        id: string;
        link: string;
        image: string;
        title: string;
        description: string;
        status: string;
    }[]
}) {
    const atividadesOn = allAtividadesData.filter(atividade => atividade.status === "ON");

    if (!atividadesOn || atividadesOn.length === 0) {
        return <div>Nenhuma atividade com status ON encontrada</div>;
    }

    return (
        <section className="section">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {atividadesOn.map(({id, title, description, image, link }, index) => (
                        <div className="col" id={index.toString()} key={index}>
                            <div className="card shadow border rounded-lg p-2" style={{ cursor: 'pointer' }}>
                                <div className="row g-0 h-100">
                                    <div className="col-md-4">
                                        <div className="img-fluid h-100 rounded-start">
                                            <Image src={image} alt={`${title} logo`} layout='responsive' height="100%" width="100%" objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className="col-md-8" style={{ paddingBottom: "-20px" }}>
                                        <div className="card-body h-100">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text crop-text-1">{description}</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link href={link} passHref>
                                            <a title="readmore" className="btn btn-atividades espaco-abaixo btn-sm">Saiba Mais</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------- Atividades paradas ----------------------------*/
const Title2 = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Inativas</h1>
        </div>
    </section>

);

function Pages2({ allAtividadesData }: {
    allAtividadesData: {
        id: string;
        link: string;
        image: string;
        title: string;
        description: string;
        status: string;
    }[]
}) {
    const atividadesOn = allAtividadesData.filter(atividade => atividade.status === "OFF");

    if (!atividadesOn || atividadesOn.length === 0) {
        return <div>Nenhuma atividade com status OFF encontrada</div>;
    }

    return (
        <section className="section">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {atividadesOn.map(({id, title, description, image, link }, index) => (
                        <div className="col" id={index.toString()} key={index}>
                            <div className="card shadow border rounded-lg p-2" style={{ cursor: 'pointer' }}>
                                <div className="row g-0 h-100">
                                    <div className="col-md-4">
                                        <div className="img-fluid h-100 rounded-start">
                                            <Image src={image} alt={`${title} logo`} layout='responsive' height="100%" width="100%" objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className="col-md-8" style={{ paddingBottom: "-20px" }}>
                                        <div className="card-body h-100">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text crop-text-1">{description}</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link href={link} passHref>
                                            <a title="readmore" className="btn btn-atividades espaco-abaixo btn-sm">Saiba Mais</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
