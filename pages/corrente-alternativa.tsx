import Header from '../components/header'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function CorrenteAlternativa({ allPostsData }) {
    return (<div>
        <Header />

        <Title />
        <Featured featuredPost={allPostsData[0]} />
        <Pages allPostsData={allPostsData} />

        <Footer />
    </div>);
}

const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Corrente Alternativa</h1>
        </div>
    </section>

);

function Featured({ featuredPost }) {
    return (
        <section className="section">
            <div className="container">
                <div className="col-12 mb-5 pb-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img src={featuredPost.image} alt={featuredPost.title} className="img-fluid rounded-lg w-100 " />
                            {/* <!-- TODO: Ajeitar a imagem de destaque. --> */}
                        </div>
                        <div className="col-md-6">
                            <h2><a href={featuredPost.link} title={featuredPost.title} className="post-title">{featuredPost.title}</a></h2>
                            <p className="card-text">{featuredPost.summary}</p>
                            <button href={featuredPost.link} title="readmore" className="btn btn-primary"> Leia Mais </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Pages({ allPostsData }) {
    return (
        <section className="Section">
            <div className="container">
                <div className="row">
                    {allPostsData.map(({ id, title, image, summary }) => (
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card border-0">
                                <img src={image} alt={title} className="card-img rounded-lg mb-4" />
                                <div className="card-body p-0">
                                    <h3><a href={id} title={title} className="post-title">{title}</a></h3>
                                    <p className="card-text">{summary}</p>
                                    <a href={id} title="readmore" className="btn btn-primary btn-sm">Leia Mais </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

