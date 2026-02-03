import { Link } from "react-router-dom";
import sampleProject from "../assets/colourThemAll.png";
import Button from "../ui/Button";
import Image from "../ui/Image";
import helpers from "../utils/helpers";

const HomeSampleProject = () => {
  return (
    <section className="container">
      <h3 className="section-title">Sample Project - Colour Them All</h3>
      <div className="grid 2xl:gap-12 gap-6 grid-cols-1 2xl:grid-cols-2">
        <Image
          src={sampleProject}
          alt="Website game to colour circles"
          linkPath="https://upbeat-hopper-d62a44.netlify.app/"
          externalLink={true}
        />
        <div
          className={`flex flex-col gap-8 
          leading-loose lg:text-2xl`}
        >
          <p>
            <span className="font-bold">Colour Them All </span>
            created in 2021 when I was just starting out in web development,
            this project reminds me of how much I've grown. I'm keeping it here
            so you can check out the game with a simple click.
          </p>
          <p>
            The objective is to click on all circles until they change colour,
            missing a click will reset circle colours.
          </p>
          <div
            className={`flex flex-col items-center justify-center
          pt-8 lg:pt-20 md:flex-row gap-8 lg:gap-16`}
          >
            <Link
              className="flex-center flex justify-center"
              to="/professional-projects"
              onClick={() =>
                helpers.trackEvent(
                  "Link",
                  "professional Projects",
                  "From SampleProject",
                )
              }
            >
              <Button text="Professional Projects" primary={true} />
            </Link>
            <Link
              className="flex-center flex justify-center"
              to="/personal-projects"
              onClick={() =>
                helpers.trackEvent(
                  "Link",
                  "Personal Projects",
                  "From SampleProject",
                )
              }
            >
              <Button text="Personal Projects" primary={true} />
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://upbeat-hopper-d62a44.netlify.app/"
              className="flex-center flex justify-center"
              onClick={() =>
                helpers.trackEvent(
                  "Link",
                  "Colour Them All",
                  "From SampleProjects",
                )
              }
            >
              <Button text="Play it live" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSampleProject;
