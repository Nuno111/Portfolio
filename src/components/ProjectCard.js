import { Link } from "react-router-dom";
import Button from "./Button";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LiveSvg } from "../assets/live.svg";

/* Has been properly refactored */
const ProjectCard = ({
	title,
	img,
	alt,
	description,
	githubLink,
	liveLink,
}) => {
	/* Tailwindcss purge requires us not to use template literals in className*/
	const projectPath = `/projects/${title}`;

	/* Will only render github and live svg icons if they have been passed down as props*/
	const externalLinks = (
		<div className="flex gap-4">
			{githubLink && (
				<a
					target="_blank"
					rel="noreferrer"
					href={githubLink}
					className="flex-center flex justify-center"
				>
					<GithubSvg className="dark:hover:text-darkTxtPrimary w-8 h-8 hover:text-lightTxtPrimary fill-current" />
				</a>
			)}
			{liveLink && (
				<a
					target="_blank"
					rel="noreferrer"
					href={liveLink}
					className="flex-center flex justify-center"
				>
					<LiveSvg className="dark:hover:text-darkTxtPrimary w-8 h-8 hover:text-lightTxtPrimary fill-current" />
				</a>
			)}
		</div>
	);

	return (
		<li className="px-10 py-4 dark:bg-darkBgSecondary bg-lightBgSecondary rounded-lg">
			<figure className="flex items-center justify-center flex-col gap-6">
					<figcaption className=" text-3xl">
						{title}
					</figcaption>
				<Link to={projectPath}>
					<img
						src={img}
						alt={alt}
						className="rounded-lg"
					/>
				</Link>
				<p>{description}</p>
					{externalLinks}
				<Link to={projectPath}>
					<Button text="Read more" />
				</Link>
			</figure>
		</li>
	);
};

export default ProjectCard;
