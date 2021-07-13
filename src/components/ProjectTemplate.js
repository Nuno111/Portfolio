import { Link } from "react-router-dom";
import Button from "./Button";

import { ReactComponent as DescriptionSvg } from "../assets/description.svg";
import { ReactComponent as ObjectiveSvg } from "../assets/objective.svg";
import { ReactComponent as ChallengeSvg } from "../assets/challenge.svg";
import { ReactComponent as ConclusionSvg } from "../assets/conclusion.svg";

const ProjectTemplate = ({
	title,
	description,
	objective,
	challenges,
	conclusion,
	img,
	img1,
	img2,
}) => {
	return (
		<article className="container py-6 lg:text-2xl xl:text-3xl">
			<h2 className="py-12 text-center dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
				{title}
			</h2>
			<div className="flex flex-col gap-10 lg:gap-20">
				<h5 className="text-3xl lg:text-4xl">
					<span>
						<DescriptionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Description
				</h5>
				<p className="">{description}</p>
				{img}
				<h5 className="text-2xl lg:text-4xl">
					<span>
						<ObjectiveSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Objective
				</h5>
				<p className="">{objective}</p>
				{img1}
				<h5 className="text-2xl lg:text-4xl">
					<span>
						<ChallengeSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Challenges
				</h5>
				<p className="">{challenges}</p>
				{img2}
				<h5 className="text-2xl lg:text-4xl">
					<span>
						<ConclusionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Conclusion
				</h5>
				<p className="">{conclusion}</p>
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
