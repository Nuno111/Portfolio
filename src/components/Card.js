const Card = ({ title, content, icon }) => {
	return (
		<div class="flex flex-col dark:bg-darkBgSecondary rounded-lg">
			<h3 class="py-4 text-gray-700 dark:text-white text-2xl font-semibold sm:text-xl">
				{title}
			</h3>
			<p class="text-md py-4 dark:text-gray-300 text-gray-500">
				{content}
			</p>
		</div>
	);
};

export default Card;
