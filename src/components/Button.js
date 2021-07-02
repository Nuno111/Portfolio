const Button = ({ text }) => {
	return (
		<button
			className="m-8 px-8 font-bold text-xl py-3
			dark:bg-darkBgPrimary bg-dark border-2 border-darkTxtPrimary
			dark:text-light text-lightTxtPrimary border-solid rounded-full
			hover:text-lightTxtPrimary dark:hover:text-darkTxtPrimary transform hover:scale-110"
			type="button"
		>
			{text}
		</button>
	);
};

export default Button;
