import { Link } from "react-router-dom";
import sampleProject from "../assets/colourThemAll.png";
import Button from "../components/Button";
import Image from "./Image";
import helpers from "../utils/helpers";

const SampleProject = () => {
  return (
    <section className="container">
      <h3 className="pt-12 text-center text-2xl font-bold md:text-3xl md:text-4xl lg:py-28">
        Sample Project - Colour Them All
      </h3>
      <div className="grid grid-cols-1 xl:gap-12 xl:grid-cols-2">
        <Image
          src={sampleProject}
          alt="Website game to colour circles"
          linkPath="https://upbeat-hopper-d62a44.netlify.app/"
          externalLink={true}
        />
        <div className="flex flex-col gap-8 justify-between leading-loose lg:text-2xl">
          <p>
            <span className="font-bold">Colour Them All </span>
            is a project I created to understand Javascript canvas, it started
            as a simple attempt to create an animated circle and evolved into a
            full browser game.
          </p>
          <p>
            The objective of the game is to click on all circles until they
            change colour, missing a click will reset circle colours.
          </p>
          <p>
            The biggest challenge I had was with code organization and thought
            about doing a full refactor once finished. This was mainly due to
            the fact that I wasn't expecting to turn this into an actual project
            with so many functionalities like changing colour themes, difficulty
            settings, increasing levels, etc.
          </p>
          <p>
            In the end, I decided a full refactor wasn't needed but I made sure
            to protect the variables by wrapping the content in an IIFE and
            adding some structure so it's not a spaghetti mess.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-8 md:flex-row lg:gap-16">
        <Link
          className="flex-center flex justify-center"
          to="/projects"
          onClick={() =>
            helpers.trackEvent("Link", "Projects", "From SampleProject")
          }
        >
          <Button text="Other projects" />
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://upbeat-hopper-d62a44.netlify.app/"
          className="flex-center flex justify-center"
          onClick={() =>
            helpers.trackEvent("Link", "Colour Them All", "From SampleProjects")
          }
        >
          <Button text="Play it live" size="medium" />
        </a>
      </div>
    </section>
  );
};

export default SampleProject;
