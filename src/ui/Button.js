const Button = ({ text, primary, extraClasses }) => {
  const extra = extraClasses ? extraClasses : "";

  const type = primary
    ? `dark:bg-darkBgPrimary dark:hover:text-darkTxtPrimary
      dark:text-light dark:border-darkTxtPrimary border-lightTxtPrimary
      text-lightTxtPrimary`
    : `dark:bg-darkTxtPrimary dark:text-darkBgPrimary dark:border-darkBgPrimary
      text-light bg-lightTxtPrimary`;

  return (
    <button
      className={`
        px-4 py-2 whitespace-nowrap text-xl lg:px-8 lg:py-4 font-bold border-2
        border-solid rounded-full transform hover:scale-110 transition-transform
        duration-300 ease-linear ${type} ${extra}`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
