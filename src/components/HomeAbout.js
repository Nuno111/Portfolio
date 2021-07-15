import HomeAboutCard from "./HomeAboutCard";
import { ReactComponent as Who } from "../assets/who.svg";
import { ReactComponent as What } from "../assets/what.svg";
import { ReactComponent as Why } from "../assets/why.svg";

const HomeAbout = () => {
	const who = (
		<Who className="w-20 h-20 lg:w-28 lg:h-28 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);
	const what = (
		<What className="w-20 h-20 lg:w-28 lg:h-28 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);
	const why = (
		<Why className="w-20 h-20 lg:w-28 lg:h-28 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);

	return (
		<section className="container">
			<h3 className="pb-12 text-center text-2xl font-bold md:text-3xl md:text-4xl lg:py-28">
				Welcome to my portfolio
			</h3>
			<ul className="flex flex-col gap-6 divide-gray-500 divide-y">
				<HomeAboutCard
					svg={who}
					title="Who Am I"
					content1="Something goes here hereh erh reh erh re erh hh
				hrehrehrehrehrhehrehrehrehre"
					path="/about"
					linkTxt="About"
				/>
				<HomeAboutCard
					svg={what}
					title="What I Do"
					content1="Something goes here hereh erh reh erh re erh hh
				hrehreherhrehrehrehhrehr  fdsaf ds fasd fsda fsdafsdae
				hrehrehrehrehrhehrehrehrehre"
					path="/projects"
					linkTxt="Projects"
					inverted={true}
				/>
				<HomeAboutCard
					svg={why}
					title="Why You're Here"
					content1="Weather you are a fellow student, developer or a recruiter
					you're probably curious about myself, hopefully this website
					is able to convince you I am a good guy and if you're up for a chat about
					anything really just hit me up."
					path="/contact"
					linkTxt="Contact"
				/>
			</ul>
		</section>
	);
};

export default HomeAbout;
