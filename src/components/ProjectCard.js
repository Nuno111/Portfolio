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
		<div className="flex gap-4 self-center">
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
		<li className="px-10 py-4 dark:bg-darkBgSecondary bg-lightBgSecondary rounded-xl">
			<div className="flex flex-col gap-6 justify-center">
				<h4 className="self-center text-3xl">
					{title}
				</h4>
				<div className="relative pb-2/3">
					<Link to={projectPath}>
						<img
							src={img}
							alt={alt}
							className="absolute w-full h-full object-cover"
						/>
					</Link>
				</div>
				<p className="self-center text-xl lg:text-2xl">
					{description}
				</p>
				{externalLinks}
				<Link
					to={projectPath}
					className="self-center"
				>
					<Button text="Read more" />
				</Link>
			</div>
		</li>
	);
};

export default ProjectCard;
