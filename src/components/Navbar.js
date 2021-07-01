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

		darkMode
			? root.classList.add("dark")
			: root.classList.remove("dark");
	}, [darkMode]);

	return (
		<nav
			className="min-h-2
			bg-lightBgSecondary border-solid
			border-lightTxtPrimary sticky z-50 top-0 dark:bg-darkBgSecondary border-b-2 dark:border-darkTxtPrimary"
		>
			<div className="container flex items-center justify-between md:py-2">
				<NavLink activeClassName="" to="/">
					<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-2xl">
						Nuno Carro
					</h2>
				</NavLink>
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
							className="hover:text-lightTxtPrimary dark:hover:text-darkTxtPrimary"
						>
							Home
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/about"
							className="hover:text-lightTxtPrimary dark:hover:text-darkTxtPrimary"
						>
							About
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/projects"
							className="hover:text-lightTxtPrimary dark:hover:text-darkTxtPrimary"
						>
							Projects
						</NavLink>
					</li>
					<li className="px-2 md:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/contact"
							className="hover:text-lightTxtPrimary dark:hover:text-darkTxtPrimary"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="dark:text-darkTxtPrimary text-lightTxtPrimary md:hidden">
					<Hamburger
						size={30}
						toggled={burgerOpen}
						toggle={setBurgerOpen}
					/>
				</div>
			</div>
			{burgerOpen && (
				<BurgerMenu
					onTogglerClick={toggleDarkMode}
					darkMode={darkMode}
				/>
			)}
		</nav>
	);
};

export default Navbar;
