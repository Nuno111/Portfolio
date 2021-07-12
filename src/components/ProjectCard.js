import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectCard = ({ title, img, alt, description }) => {
	const projectPath = `/projects/${title}`;

	return (
		<li className="px-10 py-4 dark:bg-darkBgSecondary rounded-lg">
			<figure className="flex flex-col gap-4 items-center justify-center">
				<figcaption className="text-2xl">
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
				<Link to={projectPath}>
					<Button text="Read more" />
				</Link>
			</figure>
		</li>
	);
};

export default ProjectCard;
