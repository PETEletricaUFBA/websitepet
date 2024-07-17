import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect, useRef } from "react";

const menu = [
  {
    name: "Página Inicial",
    link: "/"
  },
  {
    name: "Blog",
    link: "/corrente-alternativa",
  },
  {
    name: "Atividades",
    link: "/activities",
  },
  {
    name: "Cursos",
    link: "/cursos",
  },
];

function Header(): JSX.Element {
  const [active, setActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  const handleDropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActive(false);
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setActive(false);
    setDropdownActive(false);
  };

  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-center" ref={navRef}>
          <div className="container-fluid">
            <Link href="/" passHref>
              <a className="navbar-brand">
                <Logo />
              </a>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
              aria-controls="navbarNav"
              aria-expanded={active}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${active ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {menu.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link href={item.link} passHref>
                      <a className="nav-link" title={item.name} onClick={handleLinkClick}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={handleDropdownClick}
                    aria-expanded={dropdownActive}
                  >
                    Sobre nós
                  </a>
                  <ul className={`dropdown-menu ${dropdownActive ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link href="/downloads" passHref>
                        <a className="dropdown-item text-center" onClick={() => setDropdownActive(false)}>Planejamentos</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" passHref>
                        <a className="dropdown-item text-center" onClick={() => setDropdownActive(false)}>Time</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link href="/prosel" passHref>
                <a title="Processo Seletivo" className="btn btn-sm btn-primary ml-lg-3" onClick={() => setActive(false)}>
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
