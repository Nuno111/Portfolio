import Button from "../components/Button";
import { Fragment } from "react";
import { ReactComponent as HeroSvg } from "../assets/hero.svg";
import HomeCards from "../components/HomeCards";
import TechStack from "../components/TechStack";
import SampleProject from "../components/SampleProject";
import Contact from "../components/Contact";
import HomeAbout from "../components/HomeAbout";

const Home = () => {
	return (
		<Fragment>
			<main className="container flex flex-col gap-4 items-center justify-between py-6 h-90v font-bold md:gap-16">
				<h2 className="text-4xl md:text-6xl">
					Nuno Carro
				</h2>
				<HeroSvg className="align-middle w-3/4 h-auto xl:my-0 xl:w-1/3" />
				<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
					<span className="block pb-2">
						Front-End web developer.
					</span>
					I work with React to create modern
					single-page web applications.
				</h1>
				<Button text="About Me" />
			</main>
			<HomeAbout />
			<HomeCards />
			<TechStack />
			<SampleProject />
			<Contact />
		</Fragment>
	);
};

export default Home;
