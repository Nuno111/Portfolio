import Button from "../components/Button";
import { Fragment } from "react";
import LandingSvg from "../assets/landing.svg";
import HomeCards from "../components/HomeCards";
import TechStack from "../components/TechStack";
import SampleProject from "../components/SampleProject";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<Fragment>
			<main className="font-bold container flex flex-col gap-4 items-center justify-center py-6 min-h-100v md:gap-12">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-4xl md:text-6xl">
					Nuno Carro
				</h2>
				{/* This needs to be changed to an svg component */}
				<img
					src={LandingSvg}
					alt="Illustration of person and monitor screen"
					className="align-middle my-10 w-3/4 h-auto xl:my-0 xl:w-1/2"
				/>
				<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
					<span className="block pb-2">
						Front-End web developer.
					</span>
					I work with React to create modern
					single-page web applications.
				</h1>
				<Button text="About Me" />
			</main>
			<HomeCards />
			<TechStack />
			<SampleProject />
			<Contact />
		</Fragment>
	);
};

export default Home;
