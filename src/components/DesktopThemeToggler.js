import ThemeToggler from "./ThemeToggler";

const DesktopThemeToggler = ({
	onTogglerClick,
	darkMode,
}) => {
	return (
		<div className="flex items-center">
			<ThemeToggler
				className="px-2 sm:px-8"
				onTogglerClick={onTogglerClick}
				darkMode={darkMode}
			/>
		</div>
	);
};

export default DesktopThemeToggler;
