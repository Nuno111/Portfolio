import { ReactComponent as ProfessionalSvg } from "../assets/professional.svg";

const ProfessionalStory = () => {
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
        My first job in the UK started 2 weeks after I
        arrived in the country. I was a picker/packer in a
        company that delivers fruit & veg all around London.
        3 months later I was promoted to team leader, and 6
        months I decided it was time to move and learn more
        about the industry.
      </p>
      <p>
        My next job was as a fruit & veg buyer in the New
        Covent Garden wholesale market and I loved every
        minute of it. I was incharge of taking customers
        orders, monitor stock levels, buy and negotiate
        prices directly with the salesmen.
      </p>
      <p>
        A year later I decided learn new things again. Thats
        when I moved to a different fruit and veg company
        where I stayed for about 3 years, now as an office
        adminstrator where I had different roles over time
        such as implement and manage customers price lists,
        branch produce buyer, responsible for all
        procurement work, general office duties and stock
        controller.
      </p>
      <p>
        It was while working here that I started exploring
        web development, with a simple html/css course and
        found out I really enjoyed it.
      </p>
      <p>
        From there I spent most of my days looking forward
        to go home after work so I could study more. Often
        times to avoid traffic I would leave home at 6am
        study for 2hours in my car or staff cafeteria before
        starting work at 8:30am.
      </p>
    </section>
  );
};

export default ProfessionalStory;
