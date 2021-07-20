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
    <section id="about" className="container">
      <ul className="flex flex-col pt-4 divide-gray-500 divide-y">
        <HomeAboutCard
          svg={who}
          title="Who Am I"
          content1="I consider myself a friendly and enthusiastic person,
		      easy to talk to and extremely curious about other people's passions.
		      Currently living in Lisbon and studying at 42 Lisbon programming school."
          path="/about"
          linkTxt="About"
          ariaLabel="About section"
        />
        <HomeAboutCard
          svg={what}
          title="What I Do"
          content1="My main focus is creating SPAs as a front-end web developer,
		      but I also enjoy exploring other fields such as game development,
		      automation of repetitive tasks and working with systems."
          path="/projects"
          linkTxt="Projects"
          ariaLabel="Projects section"
        />
        <HomeAboutCard
          svg={why}
          title="Why This Portfolio Exists"
          content1="Whether you are a fellow student, developer or recruiter
		      you're probably curious about me, hopefully, with this website I
		      can convince you I am a good guy and an excellent asset to any team. If 
		      you're up for a chat you can reach me via email or phone."
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
