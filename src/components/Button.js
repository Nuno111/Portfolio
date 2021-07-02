const Button = ({ text }) => {
	return (
		<button
			class="m-8 px-8 font-bold py-3
			dark:bg-darkTxtPrimary bg-lightTxtPrimary rounded-full"
			type="button"
		>
			{text}
		</button>
	);
};

export default Button;
