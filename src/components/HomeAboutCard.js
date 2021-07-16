import { Link } from "react-router-dom";
import { ReactComponent as ArrowrightSvg } from "../assets/arrowright.svg";

const HomeAboutCard = ({
	svg,
	title,
	content1,
	path,
	linkTxt,
}) => {
	return (
		<li className="grid gap-10 grid-cols-1 items-center justify-items-center py-6 lg:grid-cols-4">
			{svg}
			<div className="flex flex-col gap-6 items-center justify-center text-center lg:col-end-4 lg:col-start-2 lg:items-start lg:justify-start lg:text-left">
				<h3 className="text-2xl font-bold xl:text-3xl">
					{title}
				</h3>
				<p className="leading-loose lg:text-2xl">
					{content1}
				</p>
				<Link
					to={path}
					className="group text-darkTxtPrimary text-xl font-bold"
				>
					{linkTxt}
					<ArrowrightSvg className="inline w-10 h-10 fill-current group-hover:animate-spin" />
				</Link>
			</div>
		</li>
	);
};

export default HomeAboutCard;
