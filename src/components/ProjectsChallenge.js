import { ReactComponent as SuccessSvg } from "../assets/success.svg";
import { ReactComponent as WaitingSvg } from "../assets/waiting.svg";

const ProjectsChallenge = ({ title, content, success }) => {
  const svgClass = `inline mr-4 w-8 h-8 dark:text-darkTxtPrimary 
    text-lightTxtPrimary fill-current lg:w-10 lg:h-10`;

  const svg = success ? (
    <SuccessSvg className={svgClass} />
  ) : (
    <WaitingSvg className={svgClass} />
  );

  return (
    <li className="flex flex-col gap-10 px-4 lg:px-12">
      <h6 className="text-2xl md:text-3xl lg:text-4xl">
        <span>{svg}</span>
        {title}
      </h6>
      <p>{content}</p>
    </li>
  );
};

export default ProjectsChallenge;
