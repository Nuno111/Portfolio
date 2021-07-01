import ThemeToggler from "./ThemeToggler";
import { NavLink } from "react-router-dom";

//Box shadow to end of menu?? Icons for sure, lines under each li? transition??
const BurgerMenu = ({ onTogglerClick, darkMode }) => {
	return (
		<div
			className="w-full bg-lightBgSecondary absolute dark:bg-darkBgSecondary top-9 bg-lightBgSecondary dark:bg-darkBgSecondary border-solid
			border-lightTxtPrimary dark:border-darkTxtPrimary border-b-2 "
		>
			<ul className="flex flex-col items-center justify-center ">
				<li className="flex-1 py-2">
					<NavLink activeClassName="text-txtPrimary" exact to="/">
						Home
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink activeClassName="text-txtPrimary" to="/about">
						About
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink activeClassName="text-txtPrimary" to="/projects">
						Projects
					</NavLink>
				</li>
				<li className="flex-1 py-2">
					<NavLink activeClassName="text-txtPrimary" to="/contact">
						Contact
					</NavLink>
				</li>
				<li className="flex-1 py-2">
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
