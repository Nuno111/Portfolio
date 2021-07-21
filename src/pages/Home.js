import { ReactComponent as HeroSvg } from "../assets/hero.svg";
import { ReactComponent as ArrowdownSvg } from "../assets/arrowdown.svg";
import Methodologies from "../components/Methodologies";
import TechStack from "../components/TechStack";
import SampleProject from "../components/SampleProject";
import Contact from "../components/Contact";
import HomeAbout from "../components/HomeAbout";
import { Transition } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <Transition as="main" appear={true} show={true}>
      <section
        className={`container flex flex-col gap-4 items-center
      justify-between py-6 hero-height font-bold md:gap-8`}
      >
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-y-40 opacity-0 ease-in-out"
          enterTo="opacity-100 translate-y-0 ease-in-out"
          as="section"
        >
          <p className="text-4xl md:text-6xl">Nuno Carro</p>
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-96 opacity-0 ease-in-out"
          enterTo="opacity-100 translate-x-0 ease-in-out"
          className="w-full h-1/3 xl:h-1/2"
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
            I work with React to create modern single-page
            web applications.
          </h1>
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="translate-y-96 opacity-0 ease-in-out"
          enterTo="opacity-100 translate-x-0 ease-in-out"
        >
          <HashLink
            smooth
            to="/#HomeAbout"
            aria-label="Scroll down to about section"
          >
            <ArrowdownSvg
              className={`inline w-16 h-16
            dark:text-darkTxtPrimary text-lightTxtPrimary fill-current 
            transform hover:scale-125 duration-500`}
            />
          </HashLink>
        </Transition.Child>
      </section>
      <HomeAbout />
      <Methodologies />
      <TechStack />
      <SampleProject />
      <Contact />
    </Transition>
  );
};

export default Home;
