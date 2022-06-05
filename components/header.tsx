import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <Link href="/" passHref>
            <a className="navbar-brand">
              <div className="img-fluid">
                <Image
                  width="200px" // TODO: Ajustar via css local
                  height="54px"
                  src="/images/logo.png"
                  alt="Logo do pet" /></div>
            </a>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-label="menu"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav mx-auto">
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
            <Link href="prosel" passHref>
              <a title="Processo Seletivo" className="btn btn-sm btn-primary ml-3" >
                Processo Seletivo
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
