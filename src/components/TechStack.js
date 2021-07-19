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

const TechStack = () => {
	return (
		<section className="container">
			<h3
				className="py-12 text-center text-2xl font-bold
				md:text-3xl lg:py-28 lg:text-4xl"
			>
				Tech Stack
			</h3>
			<ul className="grid gap-10 grid-cols-3 text-sm sm:grid-cols-5 lg:text-xl xl:grid-cols-10">
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<HtmlSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>HTML</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<CssSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>CSS</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<JavascriptSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>JavaScript</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<ReactSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>React</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<TailwindSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>TailwindCSS</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<CSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>C</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<GithubSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>Github</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<GitSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>Git</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<NeovimSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>Neovim</p>
				</li>
				<li className="flex flex-col gap-4 items-center justify-center transform hover:scale-125 duration-200 ease-linear">
					<FigmaSvg className="w-12 h-12 lg:w-20 lg:h-20" />
					<p>Figma</p>
				</li>
			</ul>
		</section>
	);
};

export default TechStack;
