import myself from "../assets/myself.jpg";
import Button from "../components/Button";

const About = () => {
  return (
    <main
      className={`container  
      hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid lg:grid-cols-2`}
    >
      <div className="flex flex-col gap-6 items-center lg:items-start justify-center min-h-1/2 md:h-full">
        <h2 className="text-center text-3xl font-bold xl:text-left md:text-5xl">
          Hi! Glad you're here.
        </h2>
        <p className="text-center text-xl md:text-left xl:text-3xl">
          Please scroll down so you can read more about
          myself or download my CV for a quick TLDR.
        </p>
        <a
          href="../assets/curriculum.pdf"
          className="self-center"
        >
          <Button text="Download CV" />
        </a>
      </div>
      <img
        className="self-center mx-auto p-6 w-full h-1/2 object-cover object-top md:p-0 md:h-3/4"
        src={myself}
        alt=""
      />
    </main>
  );
};

export default About;
