import { Link } from "react-router-dom";
import sampleProject from "../assets/colourThemAll.png";
import Button from "../components/Button";
import Image from "./Image";

const SampleProject = () => {
	return (
		<section className="container">
			<h3 className="pt-12 text-center text-2xl font-bold md:text-3xl md:text-4xl lg:py-28">
				Sample Project - Colour Them All
			</h3>
			<div className="grid 2xl:gap-12 grid-cols-1 2xl:grid-cols-2">
				<Image
					src={sampleProject}
					alt="Website game to colour circles"
					linkPath="https://upbeat-hopper-d62a44.netlify.app/"
					externalLink={true}
				/>
				<div className="flex flex-col gap-8 justify-between leading-loose lg:text-2xl">
					<p>
						<span className="font-bold">
							Colour Them All{" "}
						</span>
						is a projected I created in order to
						understand Javascript canvas, it
						started out as a simple attempt to
						create an animated circle and
						evolved into a full browser game.
					</p>
					<p>
						The objective of the game is to
						click on all circles until they
						change colour, missing a click will
						reset circle colours.
					</p>
					<p>
						The biggest challenge for me was how
						to organize my code, since I wasn't
						expecting to turn this into
						experiment into an actual project
						with so many functionalities like
						changing colour themes and
						difficulty change, levels, etc.
					</p>
					<p>
						In the end I decided a full refactor
						wasn't needed but I made sure to
						protect the variables by wrapping
						the content in an IIFE and adding
						some structure so it's not a
						spaghetti mess.
					</p>
				</div>
			</div>
			<div
				className="lg:py-8
				lg:grid-cols-4 grid grid-rows-2 items-center justify-center py-2 lg:grid-rows-none"
			>
				<Link
					className="flex-center flex justify-center lg:col-start-2"
					to="/projects"
				>
					<Button text="Other projects" />
				</Link>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://upbeat-hopper-d62a44.netlify.app/"
					className="flex-center flex justify-center lg:col-start-3"
				>
					<Button
						text="Play it live"
						size="medium"
					/>
				</a>
			</div>
		</section>
	);
};

export default SampleProject;
