import { Link } from "react-router-dom";
import Image from "../ui/Image";
import Button from "../ui/Button";

const ProjectsCard = ({ title, img, alt, description, projectPath }) => {
  /* Will only render github and live svg icons if they have been passed down as props*/
  return (
    <li
      className={`px-10 py-4 dark:bg-darkBgSecondary
    bg-lightBgSecondary rounded-xl shadow-2xl`}
    >
      <div className="flex flex-col justify-center gap-4">
        <h4
          className={`lg:text-4l self-center text-center text-2xl
          font-bold md:text-3xl`}
        >
          {title}
        </h4>
        <Image src={img} alt={alt} linkPath={projectPath} />
        <p className="self-center text-xl text-center lg:text-2xl">
          {description}
        </p>
        <Link to={projectPath} className="self-center">
          <Button text="View Project" primary={true} extraClasses="m-4" />
        </Link>
      </div>
    </li>
  );
};

export default ProjectsCard;
