import { Link } from "react-router-dom";
import Button from "./Button";

import { ReactComponent as OverviewSvg } from "../assets/overview.svg";
import { ReactComponent as ApproachSvg } from "../assets/approach.svg";
import { ReactComponent as ChallengeSvg } from "../assets/challenge.svg";

const ProjectTemplate = ({
	title,
	overview,
	approach,
	challenges,
}) => {
	return (
		<article className="container py-6">
			<h2 className="py-12 text-center dark:text-darkTxtPrimary text-lightTxtPrimary text-4xl font-bold md:text-6xl">
				{title}
			</h2>
			<div className="flex flex-col gap-10 lg:gap-20">
				<h4 className="text-2xl font-bold md:text-3xl lg:text-4xl">
					<span>
						<OverviewSvg className="inline mr-4 w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-16 lg:h-16" />
					</span>
					Overview
				</h4>
				<div className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{overview}
				</div>
				<h4 className="text-2xl font-bold md:text-3xl lg:text-4xl">
					<span>
						<ApproachSvg className="inline mr-4 w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-16 lg:h-16" />
					</span>
					Approach
				</h4>
				<div className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{approach}
				</div>
				<h4 className="text-2xl font-bold md:text-3xl lg:text-4xl">
					<span>
						<ChallengeSvg className="inline mr-4 w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-16 lg:h-16" />
					</span>
					Challenges
				</h4>
				<ul className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{challenges}
				</ul>
				<Link
					className="flex-center flex justify-center lg:col-start-2"
					to="/projects"
				>
					<Button text="Back to projects" />
				</Link>
			</div>
		</article>
	);
};

export default ProjectTemplate;
