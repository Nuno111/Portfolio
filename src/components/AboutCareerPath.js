import { ReactComponent as ProfessionalSvg } from "../assets/professional.svg";

const AboutCareerPath = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-20 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <ProfessionalSvg className={largeSvg} />
        </span>
        Career Path
      </h3>
      <p>
        My work experience consists mostly on the Fruit &
        Veg industry. When I arrived in the UK I started
        working as a picker-packer and
        quickly started getting more and more
        responsabilities, over time I held roles such as but no limited to:
      </p>
      <ul className="list-disc px-10">
        <li>E-Procurement Specialist</li>
        <li>Buyer</li>
        <li>Warehouse Team Leader</li>
        <li>Quality Controller</li>
        <li>Stock Controller</li>
      </ul>
    </section>
  );
};

export default AboutCareerPath;
