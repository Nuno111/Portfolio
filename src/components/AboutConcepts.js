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
        In this day and age, apart from a few expections, a
        website MUST be responsive since most traffic now
        comes from mobile devices.
      </p>
      <p>
        The way I handle this, is to develop for mobile
        first and then make modifications across a few
        breakpoints. I test extensively by using Chrome dev
        tools and apps like responsively app where we can
        see the same application running across multiple
        devices at the same time.
      </p>
      <p>
        I try to stay away as much as possible from pixels
        based dimensions and use percentages and viewport
        height units. This makes it easy to scale the same
        content across all the differente devices and their
        specific dimensions.
      </p>
      <p>
        Utilities like flex-box and grid layouts help
        immensely to make things adaptable and responsive.
        Another great tool to make applications responsive
        without over-complicating things is TailwindCSS
        responsive properties to enable some classes only on
        specific breakpoints.
      </p>
      <p>
        One change I am really looking forward to is for
        aspect-ratio css properties to be supported across
        all web browsers. It's a great tool to improve the
        way we handle images and it's a shame it's not fully
        supported across all browers yet.
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
        everyone, no matter no matter what their
        disabilities are.
      </p>
      <p>
        This is something I still need to invest more time
        into. At the moment the way I tackle this problem is
        to follow some of the advices that have been
        established by the web development community to
        enhance website accesibility.
      </p>
      <p>
        Having discriptive alt texts on images, and properly
        attaching aria tags to specific button components,as
        well as a good semantic html are some of the
        concepts I use accomplish accessible applications.
        Another tool I like to use to help me idenfity
        possible accesibility issues is Google lightHouse.
        This will flag some issues I forgot to address.
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
        At the moment the way I handle this in React
        applications is to make sure I am using the right
        tool for the job.
      </p>
      <p>
        To accomplish this I use React.lazy to render
        content only when it's necessary, React.memo to
        avoid some components re-rendering and rethink how
        state is handled if an application outgrew it's
        original expectations.
      </p>
      <p>
        Another way I achieve porformance is to evaluate how
        the application is loaded. Looking at the network
        tab in chrome dev tools, and looking at what sources
        are taking the longest to load and then finding ways
        to improve them.
      </p>
      <p>
        Finally when building for production I make sure to
        optimize images by reducing their original size to
        something more performant and purge css files in
        order to remove all unused classes.
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
