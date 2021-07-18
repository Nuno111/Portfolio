import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import ThemeToggler from "./ThemeToggler";
import logo from "../assets/logo.png";
import logoLight from "../assets/logolight.png";
import ReactGa from "react-ga";

const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = (event) => {
		event.preventDefault();

		setDarkMode((prevState) => !prevState);
		ReactGa.event({
			category: "Toggler",
			action: "Theme has been toggled",
		});
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
		<nav
			className="dark:bg-darkBgSecondary
			py-2 font-bolg flex flex-col items-center justify-center bg-lightBgSecondary shadow-lg lg:py-4"
		>
			{/* Change border from navbar to shadow box? need to test and compare*/}
			<div className="container flex items-center justify-between justify-center lg:grid lg:grid-cols-3">
				<NavLink to="/">
					<img
						src={darkMode ? logo : logoLight}
						alt="NC"
						className="w-16 h-16"
						width="128"
						height="128"
					/>
				</NavLink>
				<div className="flex hidden justify-center lg:flex">
					<ThemeToggler
						className="px-2 sm:px-8"
						onTogglerClick={toggleDarkMode}
						darkMode={darkMode}
					/>
				</div>
				<ul className="flex hidden gap-8 items-center justify-end md:text-2xl lg:flex">
					<li>
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/projects"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						>
							Projects
						</NavLink>
					</li>
					<li>
						<HashLink
							smooth
							to="/#contact"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
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
			<BurgerMenu
				onTogglerClick={toggleDarkMode}
				darkMode={darkMode}
				burgerOpen={burgerOpen}
				toggleBurger={toggleBurger}
			/>
		</nav>
	);
};

export default Navbar;
