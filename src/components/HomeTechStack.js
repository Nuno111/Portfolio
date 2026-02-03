import { ReactComponent as CSvg } from "../assets/c.svg";
import { ReactComponent as FigmaSvg } from "../assets/figma.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as JavascriptSvg } from "../assets/javascript.svg";
import { ReactComponent as TypescriptSvg } from "../assets/typescript.svg";
import { ReactComponent as NeovimSvg } from "../assets/neovim.svg";
import { ReactComponent as TailwindSvg } from "../assets/tailwind.svg";
import { ReactComponent as CssSvg } from "../assets/css.svg";
import { ReactComponent as GitSvg } from "../assets/git.svg";
import { ReactComponent as HtmlSvg } from "../assets/html.svg";
import { ReactComponent as ReactSvg } from "../assets/react.svg";
import { ReactComponent as SqlSvg } from "../assets/sql.svg";
import { ReactComponent as RestapiSvg } from "../assets/rest-api.svg";
import { ReactComponent as DockerSvg } from "../assets/docker.svg";
import { ReactComponent as SecuritySvg } from "../assets/security.svg";
import { ReactComponent as SeoSvg } from "../assets/seo.svg";
import { ReactComponent as WordpressSvg } from "../assets/wordpress.svg";
import { ReactComponent as NextjsSvg } from "../assets/nextjs.svg";
import { ReactComponent as CicdSvg } from "../assets/ci-cd.svg";
import { ReactComponent as DdevSvg } from "../assets/ddev.svg";
import { ReactComponent as PhpSvg } from "../assets/php.svg";
import { ReactComponent as ClouldflareSvg } from "../assets/cloudflare.svg";

const HomeTechStack = () => {
  const svgClass = "w-12 h-12 lg:w-20 lg:h-20";

  const liClass = `flex flex-col gap-4 items-center justify-center
  transform hover:scale-125 duration-200 ease-linear`;

  return (
    <section className="container">
      <h3 className="section-title">Skills & Tools</h3>
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
          <NextjsSvg className={svgClass} />
          <p>Next.js</p>
        </li>
        <li className={liClass}>
          <TypescriptSvg className={svgClass} />
          <p>TypeScript</p>
        </li>
        <li className={liClass}>
          <TailwindSvg className={svgClass} />
          <p>TailwindCSS</p>
        </li>
        <li className={liClass}>
          <CicdSvg className={svgClass} />
          <p>CI/CD</p>
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
        <li className={liClass}>
          <SqlSvg className={svgClass} />
          <p>SQL</p>
        </li>
        <li className={liClass}>
          <RestapiSvg className={svgClass} />
          <p>REST API</p>
        </li>
        <li className={liClass}>
          <DockerSvg className={svgClass} />
          <p>Docker</p>
        </li>
        <li className={liClass}>
          <DdevSvg className={svgClass} />
          <p>DDEV</p>
        </li>
        <li className={liClass}>
          <SecuritySvg className={svgClass} />
          <p>Security</p>
        </li>
        <li className={liClass}>
          <SeoSvg className={svgClass} />
          <p>SEO</p>
        </li>
        <li className={liClass}>
          <PhpSvg className={svgClass} />
          <p>PHP</p>
        </li>
        <li className={liClass}>
          <WordpressSvg className={svgClass} />
          <p>WordPress</p>
        </li>
        <li className={liClass}>
          <ClouldflareSvg className={svgClass} />
          <p>Cloudflare</p>
        </li>
      </ul>
    </section>
  );
};

export default HomeTechStack;
