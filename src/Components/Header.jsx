import React, { useEffect } from "react";
import { useState } from "react";

const Header = ({ language }) => {
  const [navShow, setNavShow] = useState(false);

  const navshowFunction = () => {
    setNavShow(!navShow);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/lejodev.png" alt="logo" />
        </div>

        <button
          onClick={() => navshowFunction()}
          className="nav-toggle"
          aria-label="toggle navigation"
        >
          <span className={navShow ? "hamburgerClose" : "hamburger"}></span>
        </button>
        <div className={navShow ? "navShow" : "nav"}>
          <nav className="navShow">
            {language ? (
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    href="#home"
                    onClick={() => setNavShow(!navShow)}
                    className="nav__link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#services"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    My Services
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#about"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    About Me
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#work"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    My Work
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    href="#home"
                    onClick={() => setNavShow(!navShow)}
                    className="nav__link"
                  >
                    Casa
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#services"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    Mis Servicios
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#about"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    Acerca De Mi
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#work"
                    className="nav__link"
                    onClick={() => setNavShow(!navShow)}
                  >
                    Mi Trabajo
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
