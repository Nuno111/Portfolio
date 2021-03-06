import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import helpers from "../utils/helpers";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/linkedin.svg";

const Footer = () => {
  const svgClass =
    "w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="flex flex-col items-center justify-center gap-2 mt-10 font-bold border-t-2 border-solid dark:bg-darkBgSecondary bg-lightBgSecondary dark:border-darkTxtPrimary border-lightTxtPrimary lg:grid lg:gap-8 lg:grid-cols-3 lg:mt-20"
    >
      <ul className="flex flex-col items-center gap-2 my-6">
        <li>
          <NavLink
            activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
            exact
            to="/"
            className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
            onClick={() => {
              scrollToTop();
              helpers.trackEvent("Link", "Home", "From Footer");
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
            exact
            to="/about"
            className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
            onClick={() => {
              scrollToTop();
              helpers.trackEvent("Link", "About", "From Footer");
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/projects"
            activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
            className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
            onClick={() => {
              scrollToTop();
              helpers.trackEvent("Link", "About", "From Footer");
            }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
            onClick={() => helpers.trackEvent("Link", "Contact", "From Footer")}
          >
            Contact
          </HashLink>
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-8 my-6">
        <li>
          <a href="https://github.com/Nuno111" target="_blank" rel="noreferrer">
            <GithubSvg className={svgClass} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nuno-gregorio-16b93a119/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinSvg className={svgClass} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nuno_carro/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSvg className={svgClass} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/nuno.gregorio.5/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookSvg className={svgClass} />
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center my-6 text-xl">
        <p>@ 2021</p>
        <p>
          Created By{" "}
          <span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
            N
          </span>
          uno{" "}
          <span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
            C
          </span>
          arro
        </p>
        <Link className="py-4 text-xs text-gray-400" to="/PrivacyPolicy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
