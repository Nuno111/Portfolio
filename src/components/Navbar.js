import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = (event) => {
		event.preventDefault();

		setDarkMode((prevState) => !prevState);
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
			className="border-solid
			border-lightTxtPrimary bg-lightBgSecondary
			border-b-2 dark:bg-darkBgSecondary
			dark:border-darkTxtPrimary flex flex-col items-center justify-center py-2 lg:py-6"
		>
			{/* Change border from navbar to shadow box? need to test and compare*/}
			<div className="container flex items-center justify-between justify-center lg:grid lg:grid-cols-3">
				<NavLink to="/">
					<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-xl md:text-3xl">
						Nuno Carro
					</h2>
				</NavLink>
				<div className="flex hidden justify-center lg:flex">
					<ThemeToggler
						className="px-2 sm:px-8"
						onTogglerClick={toggleDarkMode}
						darkMode={darkMode}
					/>
				</div>
				<ul className="flex hidden gap-8 items-center justify-end lg:flex">
					<li className="sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl"
						>
							Home
						</NavLink>
					</li>
					<li className="sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/about"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl"
						>
							About
						</NavLink>
					</li>
					<li className="sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/projects"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl"
						>
							Projects
						</NavLink>
					</li>
					<li className="sm:text-lg">
						<NavLink
							activeClassName="text-lightTxtPrimary dark:text-darkTxtPrimary"
							exact
							to="/contact"
							className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary md:text-xl"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="dark:text-darkTxtPrimary text-lightTxtPrimary lg:hidden">
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
				toggleBurger={toggleBurger}
			/>
		</nav>
	);
};

export default Navbar;
