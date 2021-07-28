const HomeMethodologiesCard = ({
  title,
  content,
  icon,
}) => {
  return (
    <li
      className={`flex flex-col dark:bg-darkBgSecondary rounded-lg gap-6
      items-center p-6 shadow-2xl transform hover:scale-110
      duration-150 ease-linear`}
    >
      {icon}
      <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">
        <span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
          {title[0]}
        </span>
        {title.substring(1)}
      </h3>
      <p
        className="dark:text-gray-300
				text-gray-500 text-center leading-loose lg:text-2xl"
      >
        {content}
      </p>
    </li>
  );
};

export default HomeMethodologiesCard;
