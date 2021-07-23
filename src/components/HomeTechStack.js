import { ReactComponent as CSvg } from "../assets/c.svg";
import { ReactComponent as FigmaSvg } from "../assets/figma.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as JavascriptSvg } from "../assets/javascript.svg";
import { ReactComponent as NeovimSvg } from "../assets/neovim.svg";
import { ReactComponent as TailwindSvg } from "../assets/tailwind.svg";
import { ReactComponent as CssSvg } from "../assets/css.svg";
import { ReactComponent as GitSvg } from "../assets/git.svg";
import { ReactComponent as HtmlSvg } from "../assets/html.svg";
import { ReactComponent as ReactSvg } from "../assets/react.svg";

const HomeTechStack = () => {
  const svgClass = "w-12 h-12 lg:w-20 lg:h-20";

  const liClass = `flex flex-col gap-4 items-center justify-center
  transform hover:scale-125 duration-200 ease-linear`;

  return (
    <section className="container">
      <h3
        className={`py-12 text-center text-2xl font-bold
        md:text-3xl lg:py-28 lg:text-4xl`}
      >
        Tech Stack
      </h3>
      <ul
        className={`grid gap-10 grid-cols-3 text-sm sm:grid-cols-5
        lg:text-xl xl:grid-cols-10`}
      >
        <li className={liClass}>
          <HtmlSvg className={svgClass} />
          <p>HTML</p>
        </li>
        <li className={liClass}>
          <CssSvg className={svgClass} />
          <p>CSS</p>
        </li>
        <li className={liClass}>
          <JavascriptSvg className={svgClass} />
          <p>JavaScript</p>
        </li>
        <li className={liClass}>
          <ReactSvg className={svgClass} />
          <p>React</p>
        </li>
        <li className={liClass}>
          <TailwindSvg className={svgClass} />
          <p>TailwindCSS</p>
        </li>
        <li className={liClass}>
          <CSvg className={svgClass} />
          <p>C</p>
        </li>
        <li className={liClass}>
          <GithubSvg className={svgClass} />
          <p>Github</p>
        </li>
        <li className={liClass}>
          <GitSvg className={svgClass} />
          <p>Git</p>
        </li>
        <li className={liClass}>
          <NeovimSvg className={svgClass} />
          <p>Neovim</p>
        </li>
        <li className={liClass}>
          <FigmaSvg className={svgClass} />
          <p>Figma</p>
        </li>
      </ul>
    </section>
  );
};

export default HomeTechStack;
