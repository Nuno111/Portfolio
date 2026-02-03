import { ReactComponent as ProfessionalSvg } from "../assets/professional.svg";

const AboutCareerPath = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 pb-6 pt-12 md:text-xl lg:gap-12 lg:pb-10 lg:pt-16 xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <ProfessionalSvg className={largeSvg} />
        </span>
        Career Path
      </h3>
      <p>
        My professional journey began in the Fruit & Veg industry, where I
        started as a picker-packer after moving to the UK. Through dedication
        and a willingness to take on new challenges, I quickly progressed into
        roles with greater responsibility, including:
      </p>
      <ul className="px-10 list-disc">
        <li>Procurement Officer</li>
        <li>Buyer</li>
        <li>Warehouse Team Leader</li>
        <li>Quality Controller</li>
        <li>Stock Controller</li>
      </ul>
      <p>
        While I gained valuable experience in logistics, operations, and team
        management, I eventually decided to pursue my passion for technology and
        problem-solving. This led me to transition into software development,
        where I have since focused on building robust web applications,
        automating workflows, and collaborating with cross-functional teams on
        high-impact projects.
      </p>
      <p>
        Since making the switch, I have worked on a variety of professional
        projects in the tech industry, including large-scale odds comparison
        platforms, multilingual news websites, and high-traffic prediction
        games. My background outside of tech has given me a unique perspective
        and a strong foundation in teamwork, adaptability, and continuous
        learning, qualities I bring to every development project.
      </p>
    </section>
  );
};

export default AboutCareerPath;
