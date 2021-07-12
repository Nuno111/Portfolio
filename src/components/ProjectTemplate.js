import { Link } from "react-router-dom";
import Button from "./Button";

import { ReactComponent as DescriptionSvg } from "../assets/description.svg";
import { ReactComponent as ObjectiveSvg } from "../assets/objective.svg";
import { ReactComponent as ChallengeSvg } from "../assets/challenge.svg";
import { ReactComponent as ConclusionSvg } from "../assets/conclusion.svg";

const ProjectTemplate = ({
	title,
	description,
	img,
	img1,
	img2,
}) => {
	return (
		<article className="container py-6">
			<h2 className="py-12 text-center dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
				{title}
			</h2>
			<div className="flex flex-col gap-10">
				<h5 className="text-xl">
					<span>
						<DescriptionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Description
				</h5>
				<p>{description}</p>
				{img}
				<h5 className="text-xl">
					<span>
						<ObjectiveSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Objective
				</h5>
				<p>{description}</p>
				{img1}
				<h5 className="text-xl">
					<span>
						<ChallengeSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Challenges
				</h5>
				<p>{description}</p>
				{img2}
				<h5 className="text-xl">
					<span>
						<ConclusionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Conclusion
				</h5>
				<p>{description}</p>
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
