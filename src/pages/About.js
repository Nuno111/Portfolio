import myself from "../assets/myself.jpg";
import Button from "../ui/Button";
import AboutPersonalStory from "../components/AboutPersonalStory";
import AboutCareerPath from "../components/AboutCareerPath";
import AboutDeveloper from "../components/AboutDeveloper";

const About = () => {
  return (
    <main className="container">
      <section
        className={`hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid  lg:grid-cols-2`}
      >
        <div className="flex flex-col gap-6 items-center justify-center pb-4 h-1/2 lg:gap-16 lg:items-start lg:h-full">
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            Welcome!
          </h2>
          <p className="text-center text-xl leading-loose lg:text-left xl:text-3xl">
            Please scroll down to read more about myself or
            download my CV for a quick TLDR.
          </p>
          <a
            href="../assets/curriculum.pdf"
            className="self-center lg:self-start"
          >
            <Button text="Download CV" />
          </a>
        </div>
        <img
          className="self-center mx-auto p-6 w-full h-1/2 object-cover object-top lg:p-0 lg:h-3/4"
          src={myself}
          alt=""
        />
      </section>
      <article>
        <AboutPersonalStory />
        <AboutCareerPath />
        <AboutDeveloper />
      </article>
    </main>
  );
};

export default About;
