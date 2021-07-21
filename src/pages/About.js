import myself from "../assets/myself.jpg";
import Button from "../components/Button";

const About = () => {
  return (
    <main
      className={`container  
      hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid lg:grid-cols-2`}
    >
      <div className="flex flex-col gap-6 pb-4 items-center lg:gap-16 lg:items-start justify-center min-h-1/2 lg:h-full">
        <h2 className="text-center text-3xl font-bold lg:text-left md:text-5xl">
          Hi! Glad you're here.
        </h2>
        <p className="text-center text-xl lg:text-left xl:text-3xl leading-loose">
          Please scroll down so you can read more about
          myself or download my CV for a quick TLDR.
        </p>
        <a
          href="../assets/curriculum.pdf"
          className="self-center lg:self-start"
        >
          <Button text="Download CV" />
        </a>
      </div>
      <img
        className="self-center mx-auto shadow-2xl p-6 w-full h-1/2 object-cover object-top lg:p-0 lg:h-3/4"
        src={myself}
        alt=""
      />
    </main>
  );
};

export default About;
