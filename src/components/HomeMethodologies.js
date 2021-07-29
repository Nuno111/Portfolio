import HomeMethodologiesCard from "./HomeMethodologiesCard";
import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as MaintainableSvg } from "../assets/maintainable.svg";

const HomeMethodologies = () => {
  const svgClass =
    "w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current";

  const performant = <PerformantSvg className={svgClass} />;

  const responsive = <ResponsiveSvg className={svgClass} />;

  const maintainable = (
    <MaintainableSvg className={svgClass} />
  );

  return (
    <section className="container">
      <h3
        className={`py-12 text-center text-2xl font-bold 
        md:text-3xl lg:py-28 lg:text-4xl`}
      >
        Methodologies I use for Single-Page Applications
        (SPAs)
      </h3>
      <section className="grid gap-16 grid-cols-1 xl:grid-cols-3">
        <HomeMethodologiesCard
          title="Responsive"
          content="To achieve SPAs responsiveness I use Mobile-First Approach
          design and test extensively across all devices."
          icon={responsive}
        />
        <HomeMethodologiesCard
          title="Maintainable"
          content="To ensure ease of SPAs maintenance I use a combination of 
          modern best practices coupled with the breakdown of complex logic 
          into smaller individual blocks."
          icon={maintainable}
        />
        <HomeMethodologiesCard
          title="Performant"
          content="To accomplish SPAs performance I investigate HTTP requests,
          optimize all sources for production and avoid unnecessary components
          re-rendering."
          icon={performant}
        />
      </section>
    </section>
  );
};

export default HomeMethodologies;
