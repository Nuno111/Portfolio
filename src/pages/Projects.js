import ProjectCard from "../components/ProjectCard";
import cub3D from "../assets/cub3d.jpg";

const Projects = () => {
	return (
		<section className="container flex flex-col gap-4 items-center justify-center py-6 md:gap-12">
			<h2 className="py-8 dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
				Projects
			</h2>
			<ul className="flex">
				<ProjectCard
					title="cub3D"
					img={cub3D}
					alt="3D shooter game"
					description="The Goal of this project was to create a simpler version of Wolfenstein 3D 1992."
				/>
			</ul>
		</section>
	);
};

export default Projects;
