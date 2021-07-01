import ThemeToggler from "./ThemeToggler";

const DesktopThemeToggler = ({
	onTogglerClick,
	darkMode,
}) => {
	return (
		<div className="flex items-center ">
			{!darkMode && (
				<div className="px-2 md:px-8">
					Light Theme Enabled
				</div>
			)}
			{darkMode && (
				<div className="px-2 md:px-8">
					Dark Theme Enabled
				</div>
			)}
			<ThemeToggler
				className="px-2 md:px-8"
				onTogglerClick={onTogglerClick}
				darkMode={darkMode}
			/>
		</div>
	);
};

export default DesktopThemeToggler;
