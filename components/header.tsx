import Image from "next/image";

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
          <a className="navbar-brand" href="/">
            <div className="img-fluid">
              <Image
                width="200px" // TODO: Ajustar via css local
                height="54px"
                src="/images/logo.png"
                alt="Logo do pet" /></div>
          </a>

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
                  <a className="nav-link" href={item.link} title={item.name}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="prosel"
              title="Processo Seletivo"
              className="btn btn-sm btn-primary ml-3"
            >
              Processo Seletivo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
