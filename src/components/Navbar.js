import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import DesktopThemeToggler from "./DesktopThemeToggler";
import BurgerMenu from "./BurgerMenu";

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

		darkMode ? root.classList.add("dark") : root.classList.remove("dark");
	}, [darkMode]);

	return (
		<nav className="sticky top-0 z-50 bg-lightBgSecondary dark:bg-darkBgSecondary ">
			<div className="container md:py-2 flex items-center justify-between">
				<NavLink activeClassName="" to="/">
					<h2 className="text-2xl text-lightTxtPrimary dark:text-darkTxtPrimary">
						Nuno Carro
					</h2>
				</NavLink>
				{burgerOpen && (
					<BurgerMenu
						onTogglerClick={toggleDarkMode}
						darkMode={darkMode}
					/>
				)}
				<div className="hidden md:block">
					<DesktopThemeToggler
						onTogglerClick={toggleDarkMode}
						darkMode={darkMode}
					/>
				</div>
				<ul className="flex hidden md:flex">
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="text-lightTxtPrimary dark:text-darkTxtPrimary md:hidden">
					<Hamburger
						size={30}
						toggled={burgerOpen}
						toggle={setBurgerOpen}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
