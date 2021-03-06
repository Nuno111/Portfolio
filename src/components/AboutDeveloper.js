import { ReactComponent as DeveloperSvg } from "../assets/developer.svg";
import AboutConcepts from "./AboutConcepts";
import Image from "../ui/Image";
import homeSetup from "../assets/homeSetup.jpg";

const AboutDeveloper = () => {
  const svgClass =
    "inline mr-4 w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-16 lg:h-16";

  return (
    <section className="flex flex-col gap-6 pt-12 pb-6 md:text-xl lg:gap-12 lg:pb-10 lg:pt-16 xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <DeveloperSvg className={svgClass} />
        </span>
        As a developer
      </h3>
      <p>
        I am focused, passionate and curious. Being able to learn new things
        every day and struggling with new concepts for a while until it becomes
        clear how they work is a very rewarding feeling.
      </p>
      <p>
        There are a few concepts I consider that every project needs to have in
        order to be a presentable work. Some of them I am still learning or
        perfecting and my goal is to have these mastered as much as possible.
      </p>
      <div className="w-3/4 mx-auto">
        <Image src={homeSetup} alt="Nuno working at his desk" />
      </div>
      <AboutConcepts />
    </section>
  );
};

export default AboutDeveloper;
