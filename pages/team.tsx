import Image from 'next/image';
import Layout from '../components/layout';
import MembersData from '../data/members.json';
import SocialIcon from '../components/socialIcon';

const Members = Object.entries(MembersData);

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
        {Members.map((item, index) => {
          if (item[1].status == "active") return (
            <div className="col" key={index.toString()}>
              <div className="card h-100 shadow border rounded-lg">
                <div className="card-img-top rounded-top">
                  <Image src={item[1].image} className="card-img-top rounded-top" alt={item[1].name + "Photo"} layout='responsive' height="100%" width="100%" objectFit="cover" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item[1].name}</h4>
                  <h6 className='fw-lighter text-muted'>Ingresso na UFBA: {item[1].ingressUFBA}</h6>
                  <h6 className='fw-lighter text-muted'>Ingresso no PET: {item[1].ingressPET}</h6>
                  <p className="card-text text-dark">{item[1].bio}</p>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  {item[1].social.map((social, index) => (
                    <SocialIcon key={index.toString()} name={social.name} link={social.link} />
                  ))}

                </div>
              </div>
            </div>
          )
        })}
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
        {Members.map((item, index) => {
          if (item[1].status == "egress") return (
            <div className="rounded-img overflow-hidden p-0" key={index.toString()}>
              <Image src={item[1].image} alt={item[1].name + "Photo"} layout='responsive' height="100%" width="100%" objectFit="cover" />
            </div>
          )
        })}
      </div>
    </div>
  </section>
);

export default Team;
