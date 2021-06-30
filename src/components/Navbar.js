import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
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

		darkMode ? root.classList.add("dark") : root.classList.remove("dark");
	}, [darkMode]);

	return (
		<nav className="sticky top-0 z-50 h-20 bg-bgSecondary">
			<div className="container flex items-center justify-between p-5 mx-auto">
				<NavLink activeClassName="" to="/">
					<h2 className="text-xl text-txtPrimary">Nuno Carro</h2>
				</NavLink>
				{burgerOpen && <ThemeToggler onTogglerClick={toggleDarkMode} />}
				<ul className="flex hidden sm:flex">
					<li className="px-2">
						<NavLink activeClassName="text-txtPrimary" exact to="/">
							Home
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink activeClassName="text-txtPrimary" to="/about">
							About
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink
							activeClassName="text-txtPrimary"
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink
							activeClassName="text-txtPrimary"
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="text-txtPrimary sm:hidden">
					<Hamburger toggled={burgerOpen} toggle={setBurgerOpen} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
