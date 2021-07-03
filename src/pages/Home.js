import Button from "../components/Button";
import { Fragment } from "react";
import LandingSvg from "../assets/landing.svg";
import HomeCards from "../components/HomeCards";
import TechStack from "../components/TechStack";

const Home = () => {
	return (
		<Fragment>
			<main className="container flex flex-col gap-4 items-center justify-center py-6 min-h-90v md:gap-12">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
					Nuno Carro
				</h2>
				<img
					src={LandingSvg}
					alt="Illustration of person and monitor screen"
					className="align-middle my-10 w-3/4 h-auto lg:my-0 lg:w-1/2"
				/>
				<h1 className="text-center text-2xl lg:text-4xl">
					Dynamic Front-End web developer. I work
					with React and Tailwindcss to create
					modern single-page web applications.
				</h1>
				<Button text="About Me" />
			</main>
			<section className="container flex flex-col gap-16 items-center">
				<HomeCards />
				<TechStack />
			</section>
		</Fragment>
	);
};

export default Home;
