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
