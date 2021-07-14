import ProjectCard from "../components/ProjectCard";
import cub3D from "../assets/cub3d.jpg";
import automatedCaloriesTracker from "../assets/automatedCaloriesTrackerMac.png";
import printf from "../assets/ftPrintf.png";

const Projects = () => {
	return (
		<section className="container flex flex-col gap-8 items-center justify-center py-12 md:gap-12">
			<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-4xl font-bold md:text-6xl">
				Projects
			</h2>
			<ul className="grid gap-8 grid-cols-1 lg:grid-cols-2">
				<ProjectCard
					title="cub3D"
					img={cub3D}
					alt="3D shooter game"
					description="Simpler version of Wolfenstein 3D 1992 coded in c."
					githubLink="https://github.com/Nuno111/42Lisboa-level4-cub3D"
					projectPath="/projects/cub3D"
				/>
				<ProjectCard
					title="Automated Calories Tracker"
					img={automatedCaloriesTracker}
					alt="Macronutriens table on a google spreadsheet"
					description="Imports macronutrients data from MyFitnessPal onto Google Spreadsheet"
					githubLink="https://github.com/Nuno111/Automated-calories-tracker"
					projectPath="/projects/AutomatedCaloriesTracker"
				/>
				<ProjectCard
					title="ft_printf"
					img={printf}
					alt="code representing printf function"
					description="Simpler version of the famous printf function."
					projectPath="/projects/FtPrintf"
				/>
			</ul>
		</section>
	);
};

export default Projects;
