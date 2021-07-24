import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as AccessibleSvg } from "../assets/accessible.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as MaintainableSvg } from "../assets/maintainable.svg";

const AboutConcepts = () => {
  const svgClass = `inline mr-4 w-8 h-8 dark:text-darkTxtPrimary 
    text-lightTxtPrimary fill-current lg:w-10 lg:h-10`;

  const responsive = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <ResponsiveSvg className={svgClass} />
        </span>
        Responsive
      </h6>
      <p>
        In this day and age, apart from a few exceptions, a
        website MUST be responsive since most traffic now
        comes from mobile devices.
      </p>
      <p>
        The way I handle this is to develop for mobile first
        and then make modifications across a few
        breakpoints. I test extensively by using Chrome dev
        tools and apps like Responsively App where we can
        see the same application running across multiple
        devices at the same time.
      </p>
      <p>
        I try to stay away as much as possible from pixels
        based dimensions and use percentages and viewport
        height units. This makes it easy to scale the same
        content across all the different devices and their
        specific dimensions.
      </p>
      <p>
        Utilities like flex-box and grid layouts help
        immensely to make things adaptable and responsive.
      </p>
      <p>
        One change I am really looking forward to is for
        aspect-ratio CSS properties to be supported across
        all web browsers. It's a great tool to improve the
        way we handle images and it's a shame it's not fully
        supported across all browsers yet.
      </p>
    </li>
  );

  const accessible = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <AccessibleSvg className={svgClass} />
        </span>
        Accessible
      </h6>
      <p>
        A public website's content should be accessible to
        everyone, whether they have disabilities or not.
      </p>
      <p>
        This is something I still need to invest more time
        into. At the moment the way I tackle this problem is
        to follow some of the principles that have been
        established by the web development community to
        enhance website accessibility.
      </p>
      <p>
        Having descriptive alt texts on images, properly
        attaching aria tags to specific button components,
        Google Lighthouse to flag issues that have been
        missed as well as a good semantic HTML composition
        are some of the concepts I use to accomplish
        accessible applications.
      </p>
    </li>
  );
  const performant = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <PerformantSvg className={svgClass} />
        </span>
        Performant
      </h6>
      <p>
        There's much to say and do to make a website
        performant.
      </p>
      <p>
        To accomplish this I use React.lazy to render
        content only when it's necessary, React.memo to
        avoid some components re-rendering and rethinking
        how state is handled if an application outgrew its
        original expectations.
      </p>
      <p>
        Another way I achieve performance is to investigate
        loading times. Opening the network tab in Chrome dev
        tools, and looking at what sources are taking the
        longest to load and then finding ways to improve
        their load times.
      </p>
      <p>
        Finally, when building for production I make sure to
        optimize images by reducing their original size to
        something more performant and purge CSS files to
        remove all unused classes that tailwind generates
        thus making it considerably smaller.
      </p>
    </li>
  );

  const maintainable = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <MaintainableSvg className={svgClass} />
        </span>
        Maintainable
      </h6>
      <p>
        Good maintainable code is something I always strive
        to achieve. This can sometimes be hard to do since
        it's somewhat of a subjective matter, therefore
        impossible to please everyone.
      </p>
      <p>
        Nonetheless, there are a few topics that most people
        agree upon to achieve "clean code".
      </p>
      <p>Some of the strategies I use are:</p>
      <ul className="px-8 list-disc">
        <li>
          Each function/component only does one thing and
          does it well
        </li>
        <li>
          Making re-usable and flexible components with the
          help of props
        </li>
        <li>
          Naming variables, functions and components based
          on their purpose
        </li>
        <li>
          Commenting conplex code that might help someone
          understand why it's there and what it does
        </li>
      </ul>
    </li>
  );

  return (
    <ul className="flex flex-col gap-6 py-12 md:text-xl lg:gap-12 xl:text-2xl">
      {responsive}
      {accessible}
      {performant}
      {maintainable}
    </ul>
  );
};

export default AboutConcepts;
