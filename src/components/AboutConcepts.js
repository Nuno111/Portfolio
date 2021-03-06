import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as AccessibleSvg } from "../assets/accessible.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as MaintainableSvg } from "../assets/maintainable.svg";

const AboutConcepts = () => {
  const svgClass = "inline mr-4 w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-10 lg:h-10";

  const responsive = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <ResponsiveSvg className={svgClass} />
        </span>
        Responsive
      </h6>
      <p>
        In this day and age, apart from a few exceptions, a website MUST be
        responsive since most traffic now comes from mobile devices. Here's how
        I handle it:
      </p>
      <ul className="px-10 space-y-4 list-disc">
        <li>
          Develop for mobile first and modify accordingly for larger screens
        </li>
        <li>Test extensively by using Chrome Dev tools and Responsively App</li>
        <li>
          Percentages and viewport units instead of fixed pixel dimensions
        </li>
        <li>CSS Flexbox and Grid Layout</li>
      </ul>
      <p>
        One change I am really looking forward to start using is aspect-ratio
        CSS properties It's a great tool to improve the way we handle images and
        it's a shame it's not fully supported across all browsers yet.
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
        A public website's content should be accessible to everyone, whether
        they have disabilities or not. I still have plenty to improve in this
        area but at the moment these are my strategies:
      </p>
      <ul className="px-10 space-y-4 list-disc">
        <li>Descriptive alt texts on images</li>
        <li>Good semantic HTML composition</li>
        <li>Aria labels to help with website navigation</li>
        <li>
          Google Lighthouse to help identify any current accessibility issues
        </li>
      </ul>
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
        There are many ways to achieve this, and it varies a lot from
        application to application, but my general approach is:
      </p>
      <ul className="px-10 space-y-4 list-disc">
        <li>Lazy loading to render content only when it's necessary</li>
        <li>Avoid unnecessary component re-rendering</li>
        <li>
          Handle state in different ways depending on the application complexity
        </li>
        <li>Investigate and improve load times by inspecting HTTP requests</li>
        <li>Optimize image file size for production</li>
        <li>Purge unused CSS classes </li>
      </ul>
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
        Good maintainable code is something I always strive to achieve. This can
        sometimes be hard to do since it's somewhat of a subjective matter,
        therefore impossible to please everyone. Here's how I try to achieve it:
      </p>
      <ul className="px-10 space-y-4 list-disc">
        <li>Each function/component only does one thing and does it well</li>
        <li>Making re-usable and flexible components with the help of props</li>
        <li>
          Naming variables, functions and components based on their purpose
        </li>
        <li>Adding comments to explain complex logic</li>
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
