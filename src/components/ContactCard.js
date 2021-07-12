const ContactCard = ({ href, svg, title, content }) => {
	return (
		<li className="group flex flex-col gap-4 items-center justify-center">
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="flex flex-col gap-4 items-center justify-center"
			>
				{svg}
				<h4>{title}</h4>
			</a>
			<p className="border-b-2 border-solid dark:border-darkTxtPrimary">
				{content}
			</p>
		</li>
	);
};

export default ContactCard;