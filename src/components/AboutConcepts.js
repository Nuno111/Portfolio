import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as AccessibleSvg } from "../assets/accessible.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as MaintainableSvg } from "../assets/maintainable.svg";

const AboutConcepts = () => {
  const svgClass =
    "inline mr-4 w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-10 lg:h-10";

  const responsive = (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>
          <ResponsiveSvg className={svgClass} />
        </span>
        Responsive
      </h6>
      <p>
        Every modern website should look and work great on any device. I always
        design mobile-first, use flexible layouts, and test across screen sizes
        to ensure a smooth experience for everyone.
      </p>
      <ul className="px-10 list-disc space-y-4">
        <li>Mobile-first development and progressive enhancement</li>
        <li>Thorough testing with Chrome DevTools and Responsively App</li>
        <li>Flexible units (percentages, viewport units) over fixed pixels</li>
        <li>CSS Flexbox and Grid for adaptable layouts</li>
      </ul>
      <p>
        I’m excited to use new CSS features like <code>aspect-ratio</code> as
        browser support improves, making image and media handling even better.
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
        Accessibility is essential, everyone should be able to use the web. I'm
        always learning, but here's how I make my projects more accessible:
      </p>
      <ul className="px-10 list-disc space-y-4">
        <li>Descriptive alt text for all images</li>
        <li>Semantic HTML for clear structure</li>
        <li>ARIA labels to improve navigation for assistive tech</li>
        <li>Regular audits with Google Lighthouse and other tools</li>
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
        Fast, efficient websites keep users happy. I focus on performance from
        the start, using these strategies:
      </p>
      <ul className="px-10 list-disc space-y-4">
        <li>Lazy loading for images and components</li>
        <li>Minimizing unnecessary re-renders</li>
        <li>Choosing the right state management for each project</li>
        <li>Optimizing load times by analyzing network requests</li>
        <li>Compressing images and assets for production</li>
        <li>Removing unused CSS and code</li>
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
        Clean, maintainable code makes projects easier to update and scale.
        Here’s how I keep my codebase organized:
      </p>
      <ul className="px-10 list-disc space-y-4">
        <li>Single-responsibility functions and components</li>
        <li>Reusable, flexible components with clear props</li>
        <li>Meaningful names for variables and functions</li>
        <li>Comments to explain complex logic when needed</li>
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
