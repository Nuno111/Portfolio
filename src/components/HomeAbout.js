import HomeAboutCard from "./HomeAboutCard";
import { ReactComponent as Who } from "../assets/who.svg";
import { ReactComponent as What } from "../assets/what.svg";
import { ReactComponent as Why } from "../assets/why.svg";

const HomeAbout = () => {
	const who = (
		<Who className="w-20 h-20 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-28 lg:h-28" />
	);
	const what = (
		<What className="w-20 h-20 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-28 lg:h-28" />
	);
	const why = (
		<Why className="w-20 h-20 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-28 lg:h-28" />
	);

	return (
		<section className="container">
			<ul className="flex flex-col divide-gray-500 divide-y">
				<HomeAboutCard
					svg={who}
					title="Who Am I"
					content1="I consider myself a friendly and enthusiastic person,
					I am easy to talk to and very curious about other people's passions.
					I am currently living in Lisbon and studying at 42 Lisbon programming school."
					path="/about"
					linkTxt="About"
				/>
				<HomeAboutCard
					svg={what}
					title="What I Do"
					content1="I focus on creating SPAs as a front-end web developer,
					but also enjoy exploring other fields such as game development,
					automation of repetitive tasks and working with systems."
					path="/projects"
					linkTxt="Projects"
					inverted={true}
				/>
				<HomeAboutCard
					svg={why}
					title="Why This Portfolio Exists"
					content1="Whether you are a fellow student, developer or recruiter
					you're probably curious about me, hopefully, with this website I
					can convince you I am a good guy and an excellent asset to any team. If 
					you're up for a chat just hit me up."
					path="/#contact"
					linkTxt="Contact"
					samePage={true}
				/>
			</ul>
		</section>
	);
};

export default HomeAbout;
