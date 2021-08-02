import { Fragment } from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";
import ProjectsChallenge from "../components/ProjectsChallenge";
import Image from "../ui/Image";

const Portfolio = () => {
  const overview = (
    <Fragment>
      <p>
        This portfolio was created to showcase my work as
        well as a bit of who am I and my personality. I
        intend to keep it up to date with projects, and I
        also have the intention to add a blog page and
        redesign in the future.
      </p>
      <p>
        The decision on which technologies to use wasn't
        hard, I wanted to improve my react skills, and also
        wanted to try out TailwindCSS so the decision was
        simple.
      </p>
    </Fragment>
  );

  const approach = (
    <Fragment>
      <p>
        First I had to think about the design, which wasn't
        easy at all, I designed the homepage in figma, but
        during development ended up not liking it, so it
        went through various re-designs.
      </p>
      <p>
        Once design was out of the way(or so I thought..) it
        was time to focus on React to render the barebones
        of the webiste. This wasn't hard since I barely have
        any state management, so my focus was directed to
        optimizing readability and maintenance.
      </p>
      <p>
        Later when it was time for production that's when I
        had the most troubles, deciding what needed to be
        optimized and how to achieve it.
      </p>
    </Fragment>
  );

  const challenges = (
    <Fragment>
      <ProjectsChallenge
        title="Designing the website from scratch"
        content="This wasn't
        easy because I wanted it to look professional but
        also have a bit of personality. I already knew how
        many pages I wanted and what content to go with it.
        So I started looking up various websites for ideias,
        I saw differnt sections from various websites and
        then adapted to my own design. During develmepment
        the design went through quite a few changes from my
        initial idea."
        success={true}
      />
      <ProjectsChallenge
        title="SEO optimization"
        content="My first time doing SEO optimization, I learned alot and I am
        quite happy with the results but planning to improve it even further soon.
        I Was able to hit 2nd page on on google the day after website was live.
        To achieve this I made sure to hit perfect score on Google Lighthouse, 
        used descriptive alt text on images and optmized meta tags and keywords."
        success={true}
      />
      <ProjectsChallenge
        title="Migrating to NextJS"
        content="Once I got to the stage of optimization I realized that most things
        I optimized and seem more complicated than they needed to be"
      />
    </Fragment>
  );
  return (
    <ProjectsTemplate
      title="cub3D"
      overview={overview}
      approach={approach}
      challenges={challenges}
      githubPath="https://github.com/Nuno111/42Lisboa-level4-cub3D"
    />
  );
};

export default Portfolio;
