const Button = ({ text, extraClasses }) => {
  return (
    <button
      className={`
        dark:hover:text-darkTxtPrimary dark:text-light
        dark:bg-darkBgPrimary dark:border-darkTxtPrimary
        text-lightTxtPrimary border-lightTxtPrimary
        m-4 px-4 py-2 whitespace-nowrap text-xl lg:px-8 lg:py-4
        font-bold border-2 border-solid rounded-full
        transform hover:scale-110 transition-transform duration-300 ease-linear
        ${extraClasses}
      `}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
