const ContactCard = ({ href, svg, title, content }) => {
	return (
		<li className="animate-bounce group flex flex-col gap-4 items-center justify-center">
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="flex flex-col gap-4 items-center justify-center"
			>
				{svg}
				<h4 className="text-xl sm:text-2xl lg:text-3xl">
					{title}
				</h4>
			</a>
			<p className="sm:text-xl lg:text-2xl border-b-2 border-solid dark:border-darkTxtPrimary">
				{content}
			</p>
		</li>
	);
};

export default ContactCard;
