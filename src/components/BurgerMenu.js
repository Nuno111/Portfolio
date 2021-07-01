import ThemeToggler from "./ThemeToggler";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ onTogglerClick, darkMode }) => {
	return (
		<div
			className="dark:bg-darkBgSecondary
			bg-lightBgSecondary absolute top-9 w-full border-b-2 border-solid
			dark:border-darkTxtPrimary border-lightTxtPrimary md:hidden"
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
		</div>
	);
};

export default BurgerMenu;
