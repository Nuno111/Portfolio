const Button = ({ text }) => {
	return (
		<button
			className="dark:hover:text-darkTxtPrimary m-8 px-8 border-darkTxtPrimary
			dark:text-light text-lightTxtPrimary rounded-full
			hover:text-lightTxtPrimary text-xl font-bold bg-dark py-3
			dark:bg-darkBgPrimary border-2 border-solid transform hover:scale-110 duration-300 ease-linear"
			type="button"
		>
			{text}
		</button>
	);
};

export default Button;
