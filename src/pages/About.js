import myself from "../assets/myself.jpg";
import Button from "../ui/Button";
import AboutPersonalStory from "../components/AboutPersonalStory";
import AboutCareerPath from "../components/AboutCareerPath";
import AboutDeveloper from "../components/AboutDeveloper";
import AboutStudent from "../components/AboutStudent";
import { Transition } from "@headlessui/react";

const About = () => {
  return (
    <main className="container">
      <Transition
        as="section"
        appear={true}
        show={true}
        className={`hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid  lg:grid-cols-2`}
      >
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-96 opacity-0"
          enterTo="opacity-100 translate-x-0"
          as="div"
          className={`flex flex-col gap-6 items-center justify-center pb-4
          h-1/2 lg:gap-16 lg:items-start lg:h-full`}
        >
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            Welcome!
          </h2>
          <p className="text-center text-xl leading-loose lg:text-left xl:text-3xl">
            Please scroll down to read more about myself or
            download my CV for a quick summary.
          </p>
          <a
            href="../assets/curriculum.pdf"
            className="self-center lg:self-start"
          >
            <Button text="Download CV" primary={true} />
          </a>
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="translate-x-96 opacity-0"
          enterTo="opacity-100 translate-x-0"
          as="img"
          className="self-center mx-auto p-6 w-full h-1/2 object-cover object-top lg:p-0 lg:h-3/4"
          src={myself}
          alt="Photograph of Nuno Carro in Bath"
        />
      </Transition>
      <article>
        <AboutPersonalStory />
        <AboutCareerPath />
        <AboutDeveloper />
        <AboutStudent />
      </article>
    </main>
  );
};

export default About;
