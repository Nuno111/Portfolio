import NavbarThemeToggler from "./NavbarThemeToggler";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import helpers from "../utils/helpers";

const NavbarBurgerMenu = ({
  onTogglerClick,
  darkMode,
  burgerOpen,
  toggleBurger,
}) => {
  const linkActiveClass = "text-lightTxtPrimary dark:text-darkTxtPrimary";

  return (
    <Transition
      show={burgerOpen}
      enter="transition-all duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      className="w-full dark:bg-darkBgSecondary bg-lightBgSecondary lg:hidden"
    >
      <ul className="flex flex-col items-center justify-center">
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            exact
            to="/"
            onClick={() => {
              toggleBurger();
              helpers.trackEvent("Link", "Home", "From Burger");
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            to="/About"
            onClick={() => {
              toggleBurger();
              helpers.trackEvent("Link", "About", "From Burger");
            }}
          >
            About
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            to="/professional-projects"
            onClick={() => {
              toggleBurger();
              helpers.trackEvent(
                "Link",
                "Professional Projects",
                "From Burger",
              );
            }}
          >
            Professional Projects
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            to="/personal-projects"
            onClick={() => {
              toggleBurger();
              helpers.trackEvent("Link", "Personal Projects", "From Burger");
            }}
          >
            Personal Projects
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <HashLink
            smooth
            to="/#contact"
            onClick={() => {
              toggleBurger();
              helpers.trackEvent("Link", "Contact", "From Burger");
            }}
          >
            Contact
          </HashLink>
        </li>
        <li className="flex flex-1 py-2" onClick={toggleBurger}>
          <NavbarThemeToggler
            onTogglerClick={onTogglerClick}
            darkMode={darkMode}
          />
        </li>
      </ul>
    </Transition>
  );
};

export default NavbarBurgerMenu;
