import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import helpers from "../utils/helpers";
import NavbarBurgerMenu from "./NavbarBurgerMenu";
import NavbarThemeToggler from "./NavbarThemeToggler";
import logo from "../assets/logo.png";
import logoLight from "../assets/logolight.png";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (event) => {
    event.preventDefault();

    setDarkMode((prevState) => !prevState);
    helpers.trackEvent("Button", "Theme toggled");
  };

  const toggleBurger = () => {
    setBurgerOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    darkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <header>
      <nav
        className={`px-4 lg:px-10 font-bolg flex flex-col items-betwee justify-between py-2
        dark:bg-darkBgSecondary bg-lightBgSecondary shadow-lg`}
      >
        <div
          className={`justify-between justify-center flex
          items-center lg:grid lg:grid-cols-3`}
        >
          <NavLink
            to="/"
            onClick={() =>
              helpers.trackEvent(
                "Link",
                "Home",
                "From Logo"
              )
            }
          >
            <img
              src={darkMode ? logo : logoLight}
              alt="Two letters N and C inside a semi open circle representing Nuno Carro"
              className="w-12 h-12"
              width="128"
              height="128"
            />
          </NavLink>
          <div className="flex hidden justify-center lg:flex">
            <NavbarThemeToggler
              className="px-2 sm:px-8"
              onTogglerClick={toggleDarkMode}
              darkMode={darkMode}
            />
          </div>
          <ul
            className={`flex hidden gap-8 items-center justify-end
            md:text-2xl lg:flex`}
          >
            <li>
              <NavLink
                activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
                exact
                to="/"
                className={`dark:hover:text-darkTxtPrimary
                hover:text-lightTxtPrimary`}
                onClick={() =>
                  helpers.trackEvent(
                    "Link",
                    "Home",
                    "From Navbar"
                  )
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
                exact
                to="/about"
                className={`dark:hover:text-darkTxtPrimary
                hover:text-lightTxtPrimary`}
                onClick={() =>
                  helpers.trackEvent(
                    "Link",
                    "About",
                    "From Navbar"
                  )
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
                exact
                to="/projects"
                className={`dark:hover:text-darkTxtPrimary 
                hover:text-lightTxtPrimary`}
                onClick={() =>
                  helpers.trackEvent(
                    "Link",
                    "Projects",
                    "From Navbar"
                  )
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                className={`dark:hover:text-darkTxtPrimary
                hover:text-lightTxtPrimary`}
                onClick={() =>
                  helpers.trackEvent(
                    "Link",
                    "Contact",
                    "From Navbar"
                  )
                }
              >
                Contact
              </HashLink>
            </li>
          </ul>
          <div className="dark:text-darkTxtPrimary text-lightTxtPrimary lg:hidden">
            <Hamburger
              size={30}
              toggled={burgerOpen}
              toggle={setBurgerOpen}
              label="Show navigation menu"
            />
          </div>
        </div>
        <NavbarBurgerMenu
          onTogglerClick={toggleDarkMode}
          darkMode={darkMode}
          burgerOpen={burgerOpen}
          toggleBurger={toggleBurger}
        />
      </nav>
    </header>
  );
};

export default Navbar;
