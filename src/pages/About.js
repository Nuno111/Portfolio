import { Transition } from "@headlessui/react";
import myself from "../assets/myself.jpg";
import Button from "../ui/Button";
import helpers from "../utils/helpers";
import AboutPersonalStory from "../components/AboutPersonalStory";
import AboutCareerPath from "../components/AboutCareerPath";
import AboutDeveloper from "../components/AboutDeveloper";
import AboutStudent from "../components/AboutStudent";
import resume from "../assets/Nuno Carro Frontend Developer.pdf";

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
          <h2 className="text-3xl font-bold text-center md:text-5xl lg:text-left">
            Welcome!
          </h2>
          <p className="text-xl leading-loose text-center lg:text-left xl:text-3xl">
            I'm glad you're here! Download my resume or scroll down to read more
            about me.
          </p>
          <a
            href={resume}
            download="Nuno Carro Frontend Developer.pdf"
            className="self-center lg:self-start"
            onClick={() => helpers.trackEvent("Button", "Download")}
          >
            <Button text="Download CV" primary={true} />
          </a>
        </Transition.Child>
        <Transition.Child
          enter="transform transition-all duration-1000 ease-in-out"
          enterFrom="translate-x-96 opacity-0"
          enterTo="opacity-100 translate-x-0"
          as="img"
          className="self-center object-cover object-top w-full p-6 mx-auto h-1/2 lg:p-0 lg:h-3/4"
          src={myself}
          alt="Photograph of Nuno Carro in Bath"
        />
      </Transition>
      <article>
        <AboutDeveloper />
        <AboutCareerPath />
        <AboutPersonalStory />
        <AboutStudent />
      </article>
    </main>
  );
};

export default About;
