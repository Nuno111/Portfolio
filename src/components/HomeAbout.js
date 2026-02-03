import HomeAboutCard from "./HomeAboutCard";
import { ReactComponent as Who } from "../assets/who.svg";
import { ReactComponent as What } from "../assets/what.svg";
import { ReactComponent as Why } from "../assets/why.svg";

const HomeAbout = () => {
  const svgClass =
    "w-20 h-20 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-28 lg:h-28";
  const who = <Who className={svgClass} />;
  const what = <What className={svgClass} />;
  const why = <Why className={svgClass} />;

  return (
    <section id="HomeAbout" className="container">
      <ul className="flex flex-col pt-4 divide-gray-500 divide-y">
        <HomeAboutCard
          svg={who}
          title="Who Am I"
          content1="I'm easygoing and curious, always up for a chat and keen to learn from those
          around me. I enjoy taking on new challenges and working with people from all sorts of backgrounds."
          path="/about"
          linkTxt="About"
          ariaLabel="About section"
        />
        <HomeAboutCard
          svg={what}
          title="What I Do"
          content1="I design and build software solutions across the stack, from web platforms and
          APIs to automation tools and secure systems. I enjoy tackling diverse challenges, optimizing
          workflows, and ensuring robust security in every project."
          path="/professional-projects"
          linkTxt="Projects"
          ariaLabel="Projects section"
        />
        <HomeAboutCard
          svg={why}
          title="Why This Portfolio Exists"
          content1="This site is my way of saying hello! Whether you're a fellow developer, recruiter, or
          just curious, I hope you enjoy exploring my work and getting to know me. If you'd like to chat
          or connect, I'm always happy to hear from you!"
          path="/#contact"
          linkTxt="Contact"
          samePage={true}
          ariaLabel="Contact section"
        />
      </ul>
    </section>
  );
};

export default HomeAbout;
