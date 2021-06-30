const ThemeToggler = (props) => {
	return (
		<button onClick={props.onTogglerClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-10 w-10 fill-current text-txtPrimary"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</button>
	);
};

export default ThemeToggler;
