import Button from "../components/Button";
import { ReactComponent as HeroSvg } from "../assets/hero.svg";
import HomeCards from "../components/HomeCards";
import TechStack from "../components/TechStack";
import SampleProject from "../components/SampleProject";
import Contact from "../components/Contact";
import HomeAbout from "../components/HomeAbout";
import { Transition } from "@headlessui/react";

const Home = () => {
	return (
		<Transition appear={true} show={true}>
			<main className="container flex flex-col gap-4 items-center justify-between py-6 h-90v font-bold md:gap-16">
				<Transition.Child
					enter="transform transition-all duration-1000 ease-in-out"
					enterFrom="-translate-y-40 opacity-0 ease-in-out"
					enterTo="opacity-100 translate-y-0 ease-in-out"
				>
					<h2 className="text-4xl md:text-6xl">
						Nuno Carro
					</h2>
				</Transition.Child>
				<Transition.Child
					enter="transform transition-all duration-1000 ease-in-out"
					enterFrom="-translate-x-96 opacity-0 ease-in-out"
					enterTo="opacity-100 translate-x-0 ease-in-out"
					className="w-full h-1/3 lg:h-1/2"
				>
					<HeroSvg className="w-full h-full" />
				</Transition.Child>
				<Transition.Child
					enter="transform transition-all duration-1000 ease-in-out"
					enterFrom="translate-x-96 opacity-0 ease-in-out"
					enterTo="opacity-100 translate-x-0 ease-in-out"
				>
					<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
						<span className="block pb-2">
							Front-End web developer.
						</span>
						I work with React to create modern
						single-page web applications.
					</h1>
				</Transition.Child>
				<Transition.Child
					enter="transform transition-all duration-1000 ease-in-out"
					enterFrom="translate-y-96 opacity-0 ease-in-out"
					enterTo="opacity-100 translate-x-0 ease-in-out"
				>
					<Button text="About Me" />
				</Transition.Child>
			</main>
			<HomeAbout />
			<HomeCards />
			<TechStack />
			<SampleProject />
			<Contact />
		</Transition>
	);
};

export default Home;
