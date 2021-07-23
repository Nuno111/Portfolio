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
  const linkClass =
    "dark:border-darkTxtPrimary border-lightTxtPrimary border-b-2";

  const linkActiveClass =
    "text-lightTxtPrimary dark:text-darkTxtPrimary";

  return (
    <Transition
      show={burgerOpen}
      enter="transition-all duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-50"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="dark:bg-darkBgSecondary
			bg-lightBgSecondary w-full lg:hidden"
    >
      <ul className="flex flex-col items-center justify-center">
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            exact
            to="/"
            className={linkClass}
            onClick={() => {
              toggleBurger();
              helpers.trackEvent(
                "Link",
                "Home",
                "From Burger"
              );
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            to="/About"
            className={linkClass}
            onClick={() => {
              toggleBurger();
              helpers.trackEvent(
                "Link",
                "About",
                "From Burger"
              );
            }}
          >
            About
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <NavLink
            activeClassName={linkActiveClass}
            to="/projects"
            className={linkClass}
            onClick={() => {
              toggleBurger();
              helpers.trackEvent(
                "Link",
                "Projects",
                "From Burger"
              );
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="flex-1 py-2">
          <HashLink
            smooth
            to="/#contact"
            className={linkClass}
            onClick={() => {
              toggleBurger();
              helpers.trackEvent(
                "Link",
                "Contact",
                "From Burger"
              );
            }}
          >
            Contact
          </HashLink>
        </li>
        <li
          className="flex flex-1 py-2"
          onClick={toggleBurger}
        >
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
