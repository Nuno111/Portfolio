import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	useEffect(() => {
		console.log(burgerOpen);
	}, [burgerOpen, setBurgerOpen]);

	return (
		<nav className="h-20 bg-bgSecondary">
			<div className="flex items-center justify-between p-5">
				<NavLink activeClassName="" to="/">
					<h2 className="text-xl text-txtPrimary">Nuno Carro</h2>
				</NavLink>
				<ul className="flex hidden sm:flex">
					<li className="px-2">
						<NavLink activeClassName="" to="/home">
							Home
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink activeClassName="" to="/about">
							About
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink activeClassName="" to="/projects">
							Projects
						</NavLink>
					</li>
					<li className="px-2">
						<NavLink activeClassName="" to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="sm:hidden">
					<Hamburger toggled={burgerOpen} toggle={setBurgerOpen} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
