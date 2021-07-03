const Card = ({ title, content, icon }) => {
	return (
		<div class="flex flex-1 flex-col gap-6 items-center my-6 py-6 dark:bg-darkBgSecondary rounded-lg shadow-2xl">
			{icon}
			<h3 class="text-gray-700 dark:text-white text-2xl sm:text-xl">
				<span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
					{title[0]}
				</span>
				{title.substring(1)}
			</h3>
			<p class="text-md flex-1 px-2 text-center dark:text-gray-300 text-gray-500 text-lg leading-loose">
				{content}
			</p>
		</div>
	);
};

export default Card;
