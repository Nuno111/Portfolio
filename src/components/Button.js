const Button = ({ text }) => {
	const dark =
		"dark:hover:text-darkTxtPrimary dark:bg-darkBgPrimary dark:border-darkTxtPrimary dark:text-light";

	const light = "text-lightTxtPrimary border-lightTxtPrimary";

	const general =
		"m-4 py-2 px-4 lg:py-4 lg:px-8 whitespace-nowrap text-xl border-2 border-solid  font-bold rounded-full transform hover:scale-110 transition-transform duration-300 ease-linear";

	return (
		<button className={`${dark} ${light} ${general}`} type="button">
			{text}
		</button>
	);
};

export default Button;
