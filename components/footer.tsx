import Image from "next/image";
import Social from "../data/social.json";

let social = Social.social;
const Footer = () => {
    return (
        <footer className="bg-light section pb-0">
            <div className="container">
                <div className="row">
                    {/* TODO: corrigir o alinhamento e distribuir melhor os elementos */}
                    <a
                        className="col mb-4 align-self-start "
                        href="\"
                    >
                        <div className="img-fluid">
                            <Image src="/images/logo.png"
                                width="200px" // TODO: Ajustar via css local
                                height="54px"
                                alt="PET Elétrica UFBA" /></div>
                    </a>
                    <p className="mb-4 col-sm-6 align-self-center">
                        Rua Professor Aristídes Novis, 2 <br />
                        Federação, Salvador - BA <br />
                        Departamento de Engenharia Elétrica, 4º andar, Sala 19.<br />
                        Escola Politécnica da UFBA <br />
                        CEP: 40210-630 <br />
                    </p>

                    <div className="col w-25 p-3 align-self-end">
                        <ul className="list-inline social-icons">
                            {social.map((item, index) => (
                                <li key={index} className="list-inline-item">
                                    <a href={item.link} title={item.title}>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Para mais informações entre em contato com{" "}
                            <a href="mailto:peteletricaufbadee@gmail.com">
                                peteletricaufbadee@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="border-top border-default text-center py-4 mt-4">
                    <small className="content">PET Elétrica UFBA | 2022</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
