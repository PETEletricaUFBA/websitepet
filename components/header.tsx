import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const menu = [
  {
    name: "Página Inicial",
    link: "/"
  },
  {
    name: "Corrente Alternativa",
    link: "/corrente-alternativa",
  },
  {
    name: "Atividades",
    link: "/activities",
  },
  {
    name: "Time",
    link: "/team",
  },
  {
    name: "Downloads",
    link: "/downloads",
  },
];

function Header(): JSX.Element {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            {/* <div className="navbar-brand col"> */}
            <Link href="/" passHref>
              <a className="navbar-brand">
                <Logo />
              </a>
            </Link>
            {/* </div> */}

            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={handleClick}
              aria-label="menu"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className={`${active ? '' : 'hidden'} navbar-collapse text-center`}>
              <ul className=" navbar-nav mx-auto">
                {/* Menu Item */}
                {menu.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link href={item.link} passHref>
                      <a className="nav-link" title={item.name}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/prosel" passHref>
                <a title="Processo Seletivo" className="btn btn-sm btn-primary ml-3" >
                  Processo Seletivo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
