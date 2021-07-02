import Button from "../components/Button";
import { Fragment } from "react";
import LandingSvg from "../images/landing.svg";
import Card from "../components/Card";

const Home = () => {
	const performant = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M10 10.414L14 14.414 19.707 8.707 22 11 22 5 16 5 18.293 7.293 14 11.586 10 7.586 2.293 15.293 3.707 16.707z" />
		</svg>
	);

	const responsive = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
		</svg>
	);

	const cleancode = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path>
		</svg>
	);

	return (
		<Fragment>
			<main className="container flex flex-col gap-4 items-center justify-center py-6 min-h-90v md:gap-12">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
					Nuno Carro
				</h2>
				{/* resposive SPA, performant,Need to remove shadow if unnoticed*/}
				<img
					src={LandingSvg}
					alt="Illustration of person and monitor screen"
					className="align-middle my-10 w-3/4 h-auto lg:my-0 lg:w-1/2"
				/>
				<h1 className="text-center text-xl md:text-2xl lg:text-4xl">
					Dynamic Front-End web developer. I work
					with React and Tailwindcss to create
					modern single-page web applications.
				</h1>
				<Button text="About Me" />
			</main>
			<section className="container flex flex-col flex-row">
				<h3 className="md:text-2l flex-1 text-center text-xl">
					How I build SPAs.
				</h3>
				<div className="flex flex-col">
					<Card
						title="Resposive"
						content="SOmething abour resonstive js:kfdfsdfsd
						fsdfdsfsdfdsfdssfdsjalfds kfds"
						icon={responsive}
					/>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
