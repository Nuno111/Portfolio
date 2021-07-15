import HomeCard from "./HomeCard";
import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as CleancodeSvg } from "../assets/cleancode.svg";

const HomeCards = () => {
	const performant = (
		<PerformantSvg className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);

	const responsive = (
		<ResponsiveSvg className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);

	const cleancode = (
		<CleancodeSvg className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
	);

	return (
		<section className="container">
			<h3 className="py-12 text-center text-2xl font-bold md:text-3xl md:text-4xl lg:py-28">
				Methodologies I use for Single Page
				Applications (SPAs)
			</h3>
			<ul className="grid gap-16 grid-cols-1 xl:grid-cols-3">
				<HomeCard
					title="Responsive"
					content="To achieve SPAs responsiveness I use Mobile-First Approach design alongside technologies like CSS flexbox/grid, Chrome dev tools and Tailwind responsive properties."
					icon={responsive}
				/>
				<HomeCard
					title="Performant"
					content="To accomplish SPAs performance I use a different tool-set of React Hooks for each project based on its complexities and optimize all files for production."
					icon={performant}
				/>
				<HomeCard
					title="Clean & "
					content="To ensure ease of SPAs maintenance I use a combination of modern best practices coupled with the breakdown of complex logic into smaller individual blocks."
					icon={cleancode}
					secondWord="Readable"
				/>
			</ul>
		</section>
	);
};

export default HomeCards;
