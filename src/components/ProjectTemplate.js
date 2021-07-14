import { Link } from "react-router-dom";
import Button from "./Button";

import { ReactComponent as DescriptionSvg } from "../assets/description.svg";
import { ReactComponent as ApproachSvg } from "../assets/approach.svg";
import { ReactComponent as ChallengeSvg } from "../assets/challenge.svg";
import { ReactComponent as ConclusionSvg } from "../assets/conclusion.svg";

const ProjectTemplate = ({
	title,
	overview,
	approach,
	challenges,
	conclusion,
}) => {
	return (
		<article className="container py-6 ">
			<h2 className="font-bold py-12 text-center dark:text-darkTxtPrimary text-lightTxtPrimary text-4xl md:text-6xl">
				{title}
			</h2>
			<div className="flex flex-col gap-10 lg:gap-20">
				<h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
					<span>
						<DescriptionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Overview
				</h4>
				<div className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{overview}
				</div>
				<h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
					<span>
						<ApproachSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Approach
				</h4>
				<div className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{approach}
				</div>
				<h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
					<span>
						<ChallengeSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</span>
					Challenges
				</h4>
				<div className="flex flex-col gap-6 md:text-xl xl:text-2xl">
					{challenges}
				</div>
				{conclusion && (
					<h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
						<span>
							<ConclusionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
						</span>
						Conclusion
					</h4>
				)}
				{conclusion}
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
