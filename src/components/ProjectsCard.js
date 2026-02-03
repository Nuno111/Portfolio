import { Link } from "react-router-dom";
import Image from "../ui/Image";
import Button from "../ui/Button";

const isExternal = (url) => url && url.startsWith("http");

const ProjectsCard = ({ title, img, alt, description, projectPath }) => {
  return (
    <li
      className={`px-10 py-4 dark:bg-darkBgSecondary
    bg-lightBgSecondary rounded-xl shadow-2xl flex flex-col justify-between min-h-[400px]`}
    >
      <div className="flex flex-col flex-grow gap-4 justify-start">
        <h4
          className={`lg:text-4l self-center text-center text-2xl
          font-bold md:text-3xl`}
        >
          {title}
        </h4>
        {img && <Image src={img} alt={alt} linkPath={projectPath} />}
        <p className="self-center text-center text-xl lg:text-2xl">
          {description}
        </p>
      </div>
      {projectPath && (
        <div className="flex justify-center mt-auto pt-4">
          {isExternal(projectPath) ? (
            <a href={projectPath} target="_blank" rel="noopener noreferrer">
              <Button text="View Project" primary={true} extraClasses="m-4" />
            </a>
          ) : (
            <Link to={projectPath}>
              <Button text="View Project" primary={true} extraClasses="m-4" />
            </Link>
          )}
        </div>
      )}
    </li>
  );
};

export default ProjectsCard;
