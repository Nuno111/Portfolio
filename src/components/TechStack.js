import { Fragment } from "react";
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
		<Fragment>
			<h3 className="md:text-2l py-12 text-center text-2xl sm:text-3xl md:text-4xl lg:py-28">
				Tech Stack
			</h3>
			<ul className="grid gap-10 grid-cols-4 sm:grid-cols-5 xl:grid-cols-10">
				<li className="flex items-center justify-center">
					<HtmlSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<CssSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<JavascriptSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<ReactSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<TailwindSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<CSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<GithubSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<GitSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<NeovimSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
				<li className="flex items-center justify-center">
					<FigmaSvg className="w-12 h-12 lg:w-20 lg:h-20" />
				</li>
			</ul>
		</Fragment>
	);
};

export default TechStack;
