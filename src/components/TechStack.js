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
			<h3 className="md:text-2l text-center text-2xl sm:text-3xl md:text-4xl">
				Tech Stack
			</h3>
			<div className="grid gap-10 grid-cols-5 lg:grid-cols-10">
				<HtmlSvg className="w-20 h-20" />
				<CssSvg className="w-20 h-20" />
				<JavascriptSvg className="w-20 h-20" />
				<ReactSvg className="w-20 h-20" />
				<TailwindSvg className="w-20 h-20" />
				<CSvg className="w-20 h-20" />
				<GithubSvg className="w-20 h-20" />
				<GitSvg className="w-20 h-20" />
				<NeovimSvg className="w-20 h-20" />
				<FigmaSvg className="w-20 h-20" />
			</div>
		</Fragment>
	);
};

export default TechStack;
