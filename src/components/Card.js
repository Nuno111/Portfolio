import { Fragment } from "react";

const Card = ({ title, content, icon, secondWord }) => {
	const capitalizeSecondWord = secondWord ? (
		<Fragment>
			<span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
				{secondWord[0]}
			</span>
			{secondWord.substring(1)}
		</Fragment>
	) : undefined;

	return (
		<li className="flex flex-col gap-6 items-center p-6 dark:bg-darkBgSecondary rounded-lg shadow-2xl">
			{icon}
			<h3 className="text-gray-700 dark:text-white text-2xl sm:text-xl">
				<span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
					{title[0]}
				</span>
				{title.substring(1)}
				{capitalizeSecondWord}
			</h3>
			<p className="text-md flex-1 px-2 text-center dark:text-gray-300 text-gray-500 text-lg leading-loose">
				{content}
			</p>
		</li>
	);
};

export default Card;
