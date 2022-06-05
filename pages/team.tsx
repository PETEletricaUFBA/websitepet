import Image from 'next/image';
import Layout from '../components/layout';

const Team = () => {
  return (
    <Layout>

      <Actives />
      <Egress />

    </Layout>
  )
};

const Actives = () => (
  <section className="section">
    <div className="container">
      <h2 className="pb-2 text-center">Time</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 shadow border rounded-lg">
            <div className="card-img-top rounded-top">
              <Image src="/images/roger.webp" className="card-img-top rounded-top" alt="..." layout='responsive' height="100%" width="100%" objectFit="contain" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Gol D. Roger</h5>
              <p className="card-text">I'm Roger! This meeting must be fate, Rayleigh! What do you say to turning the world upside down with me?!!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted"> Pirate King</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Egress = () => (
  <section className="section">
    <div className="container">
      <h2 className="text-center">Hall dos Egressos</h2>
      <div className="row">
        {/* TODO: Implementar Modal pop up para o card dos egressos */}
        <div className="rounded-img">
          <Image className="rounded-img" src="/images/roger.webp" alt="NOME" layout='responsive' height="100%" width="100%" objectFit="contain" />
        </div>

      </div>
    </div>
  </section>
);

export default Team;
