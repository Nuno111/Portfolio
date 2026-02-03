import HomeMethodologiesCard from "./HomeMethodologiesCard";
import { ReactComponent as ResponsiveSvg } from "../assets/responsive.svg";
import { ReactComponent as PerformantSvg } from "../assets/performant.svg";
import { ReactComponent as MaintainableSvg } from "../assets/maintainable.svg";

const HomeMethodologies = () => {
  const svgClass =
    "w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current";

  const performant = <PerformantSvg className={svgClass} />;

  const responsive = <ResponsiveSvg className={svgClass} />;

  const maintainable = <MaintainableSvg className={svgClass} />;

  return (
    <section className="container">
      <h3 className="section-title">My Development Process</h3>

      <section className="grid gap-16 grid-cols-1 xl:grid-cols-3">
        <HomeMethodologiesCard
          title="Analyze & Plan"
          content="I dive deep into understanding the problem, gathering requirements,
          and mapping out a clear plan before writing any code."
          icon={responsive}
        />
        <HomeMethodologiesCard
          title="Execute & Adapt"
          content="I build solutions methodically, staying flexible to handle edge cases and unexpected challenges as they arise."
          icon={maintainable}
        />
        <HomeMethodologiesCard
          title="Review & Improve"
          content="I value feedback and regularly review my work, always looking for ways to refine, optimize, and learn from others."
          icon={performant}
        />
      </section>

    </section>
  );
};

export default HomeMethodologies;
