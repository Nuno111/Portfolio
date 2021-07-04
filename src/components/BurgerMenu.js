import ThemeToggler from "./ThemeToggler";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

const BurgerMenu = ({
	onTogglerClick,
	darkMode,
	burgerOpen,
}) => {
	return (
		<Transition
			show={burgerOpen}
			enter="transition-opacity duration-500"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-500"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			className="dark:bg-darkBgSecondary
			bg-lightBgSecondary absolute top-20 w-full border-b-2 border-solid
			dark:border-darkTxtPrimary border-lightTxtPrimary lg:hidden"
		>
			<ul className="flex flex-col items-center justify-center">
				<li className="flex-1 py-2">
					<NavLink
						activeClassName="text-lightTxtPrimary
						dark:text-darkTxtPrimary"
						exact
						to="/"
						className="dark:border-darkTxtPrimary
						border-lightTxtPrimary border-b-2"
					>
						Home
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink
						activeClassName="text-lightTxtPrimary
						dark:text-darkTxtPrimary"
						to="/about"
						className="dark:border-darkTxtPrimary
						border-lightTxtPrimary border-b-2"
					>
						About
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink
						activeClassName="text-lightTxtPrimary
						dark:text-darkTxtPrimary"
						to="/projects"
						className="dark:border-darkTxtPrimary
						border-lightTxtPrimary border-b-2"
					>
						Projects
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink
						activeClassName="text-lightTxtPrimary
						dark:text-darkTxtPrimary"
						to="/contact"
						className="dark:border-darkTxtPrimary
						border-lightTxtPrimary border-b-2"
					>
						Contact
					</NavLink>
				</li>
				<li className="flex flex-1 py-2">
					<ThemeToggler
						onTogglerClick={onTogglerClick}
						darkMode={darkMode}
					/>
				</li>
			</ul>
		</Transition>
	);
};

export default BurgerMenu;
