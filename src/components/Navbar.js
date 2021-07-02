import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import DesktopThemeToggler from "./DesktopThemeToggler";
import BurgerMenu from "./BurgerMenu";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = (event) => {
		event.preventDefault();

		setDarkMode((prevState) => !prevState);
	};

	useEffect(() => {
		console.log(burgerOpen);
	}, [burgerOpen]);

	useEffect(() => {
		const root = window.document.documentElement;

		darkMode
			? root.classList.add("dark")
			: root.classList.remove("dark");
	}, [darkMode]);

	return (
		<nav
			className="border-solid
			border-lightTxtPrimary bg-lightBgSecondary
			border-b-2 flex items-center min-h-10v dark:bg-darkBgSecondary dark:border-darkTxtPrimary"
		>
			<div className="container flex items-center justify-between">
				<NavLink activeClassName="" to="/">
					<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-2xl">
						Nuno Carro
					</h2>
				</NavLink>
				<div className="flex hidden items-center sm:block">
					<ThemeToggler
						className="px-2 sm:px-8"
						onTogglerClick={toggleDarkMode}
						darkMode={darkMode}
					/>
				</div>
				<ul className="flex hidden sm:flex">
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl lg:text-2xl"
						>
							Home
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/about"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl lg:text-2xl"
						>
							About
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/projects"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl lg:text-2xl"
						>
							Projects
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/contact"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl lg:text-2xl"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="dark:text-darkTxtPrimary text-lightTxtPrimary sm:hidden">
					<Hamburger
						size={30}
						toggled={burgerOpen}
						toggle={setBurgerOpen}
					/>
				</div>
			</div>
			<BurgerMenu
				onTogglerClick={toggleDarkMode}
				darkMode={darkMode}
				burgerOpen={burgerOpen}
			/>
		</nav>
	);
};

export default Navbar;
