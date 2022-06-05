import Header from '../components/header'
import Footer from '../components/footer'

import AnuualPlans from '../data/annualPlans.json'
import ReportsData from '../data/reports.json'

const plans = AnuualPlans.plans;
const reports = ReportsData.reports;

export default function Downloads() {
    return (<div className="Team">
        <Header />
        <Title />
        <Plans />
        <Reports />
        <Footer />
    </div>);
}


const Title = () => (
    <>
        <section className="section pb-0">
            <div className="container text-center">
                <h1 className="display-3">Downloads</h1>

            </div>
        </section>
        <section className="section pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="content"><p>Essa página é destinada para o download de arquivos referentes ao grupo PET-Elétrica.</p>
                            <p>Segue abaixo os links para download:</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

const Plans = () => (
    <section className="section pb-0">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="section-title">Planejamento de Atividades:</h2>
                </div>

                {plans.map((item, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-4">
                        <div className="feature-card text-center bg-light">
                            <a href={item.link} target="_blank" rel="noreferrer"><button className="btn btn-primary"> {item.year}</button></a>
                        </div>
                    </div>))}
            </div>
        </div>
    </section>

);

const Reports = () => (
    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="section-title">Relatório de Atividades:</h2>
                </div>

                {reports.map((item, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-4">
                        <div className="feature-card text-center bg-light">
                            <a href={item.link} target="_blank" rel="noreferrer"><button className="btn btn-primary"> {item.year}</button></a>
                        </div>
                    </div>))}
            </div>
        </div>
    </section>

);
