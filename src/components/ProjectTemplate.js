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
		<article className="container py-6 lg:text-2xl">
			<h2 className="py-12 text-center dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
				{title}
			</h2>
			<div className="flex flex-col gap-10 lg:gap-28">
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
					<div className="lg:my-auto">
						<h5 className="py-4 text-2xl lg:text-4xl">
							<span>
								<DescriptionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
							</span>
							Description
						</h5>
						<p className="py-4">
							{description}
						</p>
					</div>
					{img}
				</div>
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
					<div className="lg:my-auto">
						<h5 className="py-4 text-2xl lg:text-4xl">
							<span>
								<ObjectiveSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
							</span>
							Objective
						</h5>
						<p className="py-4">{objective}</p>
					</div>
					{img1}
				</div>
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
					<div className="lg:my-auto">
						<h5 className="py-4 text-2xl lg:text-4xl">
							<span>
								<ChallengeSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
							</span>
							Challenges
						</h5>
						<p className="py-4">{challenges}</p>
					</div>
					{img1}
				</div>
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
					<div className="lg:my-auto">
						<h5 className="py-4 text-2xl lg:text-4xl">
							<span>
								<ConclusionSvg className="inline mr-4 w-10 h-10 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
							</span>
							Conclusion
						</h5>
						<p className="py-4">{conclusion}</p>
					</div>
				</div>
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
