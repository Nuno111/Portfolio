import ProjectsCard from "../components/ProjectsCard";
import Button from "../ui/Button";
import cub3D from "../assets/cub3d.png";
import automatedCaloriesTracker from "../assets/automatedCaloriesTracker.png";
import ftPrintf from "../assets/ftPrintf.png";
import { Transition } from "@headlessui/react";

const Projects = () => {
  return (
    <main className="container">
      <Transition
        appear={true}
        show={true}
        className={`flex flex-col gap-12 items-center 
        justify-center pt-12 md:gap-16`}
      >
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-y-40 opacity-0"
          enterTo="opacity-100 translate-y-0"
          as="h2"
          className="text-4xl font-bold md:text-5xl"
        >
          Projects
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-96 opacity-0"
          enterTo="opacity-100 translate-x-0 "
          as="ul"
          className="grid gap-8 grid-cols-1 lg:gap-16 lg:grid-cols-2"
        >
          <ProjectsCard
            title="cub3D"
            img={cub3D}
            alt="3D shooter game"
            description="Simpler version of Wolfenstein 3D 1992 coded in c."
            githubLink="https://github.com/Nuno111/42Lisboa-level4-cub3D"
            projectPath="/projects/cub3D"
          />
          <ProjectsCard
            title="Automated Calories Tracker"
            img={automatedCaloriesTracker}
            alt="Macronutriens table on a google spreadsheet"
            description="Exports calories data into a Google Spreadsheet"
            projectPath="/projects/AutomatedCaloriesTracker"
          />
          <ProjectsCard
            title="ft_printf"
            img={ftPrintf}
            alt="code representing printf function"
            description="Simpler version of the famous printf function."
            projectPath="/projects/FtPrintf"
          />
        </Transition.Child>
        <p className="text-xl xl:text-3xl">
          For a full list of all my projects checkout my
          Github account on the link below.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Nuno111"
        >
          <Button text="Github" primary={true} />
        </a>
      </Transition>
    </main>
  );
};

export default Projects;
