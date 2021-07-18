import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as ArrowrightSvg } from "../assets/arrowright.svg";
import helpers from "../utils/helpers";

const HomeAboutCard = ({
	svg,
	title,
	content1,
	path,
	linkTxt,
	samePage,
	ariaLabel,
}) => {
	const onClick = () => {
		helpers.trackEvent(
			"Link",
			linkTxt,
			"From HomeAbout"
		);
	};

	const link = samePage ? (
		<HashLink
			smooth
			to={path}
			className="group dark:text-darkTxtPrimary text-lightTxtPrimary text-xl font-bold"
			aria-label={ariaLabel}
			onClick={onClick}
		>
			{linkTxt}
			<ArrowrightSvg className="inline w-10 h-10 fill-current group-hover:animate-spin" />
		</HashLink>
	) : (
		<Link
			to={path}
			className="group dark:text-darkTxtPrimary text-lightTxtPrimary text-xl font-bold"
			aria-label={ariaLabel}
			onClick={onClick}
		>
			{linkTxt}
			<ArrowrightSvg className="inline w-10 h-10 fill-current group-hover:animate-spin" />
		</Link>
	);
	return (
		<li className="grid gap-10 grid-cols-1 items-center justify-items-center py-6 lg:grid-cols-4">
			{svg}
			<div className="flex flex-col gap-6 items-center justify-center text-center lg:col-end-4 lg:col-start-2 lg:items-start lg:justify-start lg:text-left">
				<h2 className="text-2xl font-bold xl:text-3xl">
					{title}
				</h2>
				<p className="leading-loose lg:text-2xl">
					{content1}
				</p>
				{link}
			</div>
		</li>
	);
};

export default HomeAboutCard;
