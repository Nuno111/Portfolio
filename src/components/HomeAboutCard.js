import { Link } from "react-router-dom";
import { ReactComponent as ArrowrightSvg } from "../assets/arrowright.svg";

const HomeAboutCard = ({
	svg,
	title,
	content1,
	path,
	linkTxt,
	inverted,
}) => {
	return (
		<li className="flex flex-col gap-10 items-center justify-center pt-6 px-6 lg:flex-row">
			{!inverted && svg}
			<div className="flex flex-col gap-6 items-center justify-center lg:gap-4 lg:items-start">
				<h3 className="text-2xl font-bold">
					{title}
				</h3>
				<p className="leading-loose">{content1}</p>
				<Link
					to={path}
					className="text-darkTxtPrimary text-xl font-bold"
				>
					{linkTxt}
					<ArrowrightSvg className="inline w-10 h-10 fill-current hover:animate-spin" />
				</Link>
			</div>
			{inverted && svg}
		</li>
	);
};

export default HomeAboutCard;
