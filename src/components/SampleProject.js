import { Fragment } from "react";
import sampleProject from "../assets/sampleproject.jpg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SampleProject = () => {
	return (
		<Fragment>
			<h3 className="py-12 text-center text-2xl md:text-3xl md:text-4xl lg:py-28">
				Sample Project - Colour Them All
			</h3>
			<div className="2xl:grid 2xl:gap-12 2xl:grid-cols-2">
				<div className="relative pb-2/3">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://upbeat-hopper-d62a44.netlify.app/"
					>
						<img
							src={sampleProject}
							alt="Web game to click and colour circles"
							className="absolute w-full h-full rounded-lg shadow-xl object-cover"
						/>
					</a>
				</div>
				<div className="flex flex-col gap-8 justify-between py-6 lg:text-2xl">
					<p>
						Colour Them All is a projected I
						created in order to understand
						Javascript canvas, it started out as
						a simple attempt to create an
						animated circle and evolved into a
						full browser game.
					</p>
					<p>
						The objective of the game is to
						click on all the circles until they
						all change colour, missing a click
						will reset circle colours.
					</p>
					<p>
						Biggest challenge for me here was
						how to organize my code, since I
						wasn't expecting to turn this into a
						full project with so many
						functionalities like changing colour
						themes and difficulty change.
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
		</Fragment>
	);
};

export default SampleProject;
