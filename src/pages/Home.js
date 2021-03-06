import { ReactComponent as HeroSvg } from "../assets/hero.svg";
import { ReactComponent as ArrowdownSvg } from "../assets/arrowdown.svg";
import { Transition } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import HomeMethodologies from "../components/HomeMethodologies";
import HomeTechStack from "../components/HomeTechStack";
import HomeSampleProject from "../components/HomeSampleProject";
import HomeContact from "../components/HomeContact";
import HomeAbout from "../components/HomeAbout";

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
          as="p"
          className="text-4xl md:text-6xl"
        >
          Nuno Carro
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-96 opacity-0 ease-in-out"
          enterTo="opacity-100 translate-x-0 ease-in-out"
          className="w-3/4 h-1/2 md:w-2/3 lg:w-1/3"
        >
          <HeroSvg className="w-full h-full mx-auto" />
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="translate-x-96 opacity-0 ease-in-out"
          enterTo="opacity-100 translate-x-0 ease-in-out"
          as="h1"
          className="text-2xl text-center md:text-3xl lg:text-4xl"
        >
          I am an enthusiastic Front-End Web Developer who creates modern
          single-page web applications.
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
              className={`inline w-12 h-12 lg:w-16 lg:h-16
            dark:text-darkTxtPrimary text-lightTxtPrimary fill-current 
            transform hover:scale-125 duration-500`}
            />
          </HashLink>
        </Transition.Child>
      </section>
      <HomeAbout />
      <HomeMethodologies />
      <HomeTechStack />
      <HomeSampleProject />
      <HomeContact />
    </Transition>
  );
};

export default Home;
