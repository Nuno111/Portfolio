import ProjectsCard from "../components/ProjectsCard";
import { Transition } from "@headlessui/react";

const projects = [
  {
    title: "oddsscanner.com",
    description:
      "A comprehensive odds comparison platform featuring 9 different sports, with 4 sports offering real-time live odds and game status. Includes user authentication, SEO optimization, high performance, and a wide range of features for sports enthusiasts.",
    link: "https://oddsscanner.com/br",
  },
  {
    title: "sambafoot.com",
    description:
      "A multilingual football news website with over 50,000 pages in 5 languages. Revamped in collaboration with design, content, and SEO teams to deliver a modern, scalable, and user-friendly experience for football fans worldwide.",
    link: "https://sambafoot.com/br",
  },
  {
    title: "megachute.com",
    description:
      "A high-traffic football prediction platform where users voted on games and competed for cash prizes. Managed over 250,000 users and distributed more than 1M BRL in prizes. (Closed in 2024 due to new legislation in Brazil.)",
    link: "https://megachute.com",
  },
  {
    title: "Partnership Websites",
    description:
      "Developed and maintained various partnership websites based on the Gazeta Esportiva concept, providing odds comparison and betting tools for partner platforms. Example: Gazeta Esportiva Apostas.",
    link: "https://gazetaesportiva.com/apostas",
  },
];

const disclaimer =
  "These are projects I worked on while at Odds Scanner, collaborating with diverse teams and professionals across multiple fields. I do not own or claim ownership of any of these projects or their content; all rights belong to their respective owners. Please note that these projects may change over time as they are live products and are constantly being worked on and improved.";

const ProfessionalProjects = () => {
  return (
    <main className="container">
      <Transition
        appear={true}
        show={true}
        className="flex flex-col gap-12 items-center justify-center pt-12 md:gap-16"
      >
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-y-40 opacity-0"
          enterTo="opacity-100 translate-y-0"
          as="h1"
          className="text-4xl font-bold md:text-5xl"
        >
          Professional Projects
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-96 opacity-0"
          enterTo="opacity-100 translate-x-0 "
          as="div"
          className="flex flex-col gap-8 w-full max-w-4xl"
        >
          <div className="p-6 dark:bg-darkBgSecondary bg-lightBgSecondary rounded-lg shadow-md">
            <p className="text-darkTxtSecondary dark:text-lightTxtSecondary text-base md:text-lg">
              <strong>Disclaimer:</strong> {disclaimer}
            </p>
          </div>
          <ul className="grid gap-8 grid-cols-1 xl:gap-16 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectsCard
                key={project.title}
                title={project.title}
                description={project.description}
                projectPath={project.link}
              />
            ))}
          </ul>
        </Transition.Child>
      </Transition>
    </main>
  );
};

export default ProfessionalProjects;
