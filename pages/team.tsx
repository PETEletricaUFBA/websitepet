import Header from '../components/header'
import Footer from '../components/footer'


const Team = () => {
  return (<div className="Team">
    <Header />

    <Actives />
    <Egress />

    <Footer />
  </div>)
};

const Actives = () => (
  <section className="section">
    <div className="container">
      <h2 className="pb-2 text-center">Time</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 shadow border rounded-lg">
            <img src="/images/roger.webp" className="card-img-top rounded-top" alt="..." />
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
          <a href="/" title="NOME"><img className="rounded-img" src="/images/roger.webp" alt="NOME" /></a>
      </div>
    </div>
  </section>
);

export default Team;
