import ThemeToggler from "./ThemeToggler";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ onTogglerClick, darkMode }) => {
	return (
		<div className="flex bg-bgSecondary">
			<div className="flex-1">
				<ul className="flex flex-col">
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
			</div>
			<div className="flex-1">
				<ThemeToggler
					onTogglerClick={onTogglerClick}
					darkMode={darkMode}
				/>
			</div>
		</div>
	);
};

export default BurgerMenu;
