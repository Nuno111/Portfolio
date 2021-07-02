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
			className="border-solid
			border-lightTxtPrimary sticky z-50 inset-0 dark:bg-darkBgSecondary bg-lightBgSecondary border-b-2 dark:border-darkTxtPrimary"
		>
			<div className="container flex items-center justify-between py-4">
				<NavLink activeClassName="" to="/">
					<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-2xl">
						Nuno Carro
					</h2>
				</NavLink>
				<div className="hidden sm:block">
					<DesktopThemeToggler
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
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						>
							Home
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/about"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						>
							About
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/projects"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						>
							Projects
						</NavLink>
					</li>
					<li className="px-2 sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							to="/contact"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
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
