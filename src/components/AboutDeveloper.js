import { ReactComponent as DeveloperSvg } from "../assets/developer.svg";
import { ReactComponent as ResponsiveSvg } from "../assets/responsive2.svg";

const AboutDeveloper = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  const smallSvg = `inline mr-4 w-8 h-8 dark:text-darkTxtPrimary 
    text-lightTxtPrimary fill-current lg:w-10 lg:h-10`;

  return (
    <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <DeveloperSvg className={largeSvg} />
        </span>
        As a developer
      </h3>
      <p>
        I am focused, passionate and curious. Learning how
        to code challenges me everyday and really makes me
        think about problems in a different way.
      </p>
      <p>
        This whole notion that you never stop learning new
        things while working as a developer, may be draining
        sometimes but for me it's actually one of it's
        greatest benifits. Being able to learn new things
        everyday, struggling with new concepts for awhile
        until it becomes clear how they work is a very
        rewarding feeling. Prevents me from getting bored
        and keeps things fresh and interesting day in day
        out.
      </p>
      <p>
        As a web developer there are at least 3 concepts I
        consider that every project needs to have in order
        to be a presentable work. Some of them I am still
        learning or perfecting and my goal is to have these
        mastered as much as possible.
      </p>
      <ul className="flex flex-col gap-6 py-12 md:text-xl lg:gap-12 xl:text-2xl">
        <li className="flex flex-col gap-10 px-4 lg:px-12">
          <h6 className="text-2xl md:text-3xl lg:text-4xl">
            <span>
              <ResponsiveSvg className={smallSvg} />
            </span>
            Responsive
          </h6>
          <p>
            In this day and age, apart from a few
            expections, a website MUST be responsive since
            most traffic now comes from mobile devices.
          </p>
          <p>
            The way I handle this, is to develop for mobile
            first and then make modifications across a few
            breakpoints. I test extensively by using Chrome
            dev tools and apps like responsively app where
            we can see the same application running across
            multiple devices at the same time.
          </p>
          <p>
            I try to stay away as much as possible from
            pixels based dimensions and use percentages and
            viewport height units. This makes it easy to
            scale the same content across all the differente
            devices and their specific dimensions.
          </p>
          <p>
            Utilities like flex-box and grid layouts help
            immensely to make things adaptable and
            responsive. Another great tool to make
            applications responsive without
            over-complicating things is TailwindCSS
            responsive properties to enable some classes
            only on specific breakpoints.
          </p>
          <p>
            One change I am really looking forward to is for
            aspect-ratio css properties to be supported
            across all web browsers. It's a great tool to
            improve the way we handle images and it's a
            shame it's not fully supported across all
            browers yet.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutDeveloper;
