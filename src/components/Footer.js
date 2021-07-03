import { Link } from "react-router-dom";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/linkedin.svg";

const Footer = () => {
	return (
		<footer
			className="dark:border-darkTxtPrimary
			flex flex-col gap-8 mt-20 border-t-2 border-solid border-lightTxtPrimary md:flex-row"
		>
			<ul className="flex flex-1 flex-col gap-2 items-center my-6">
				<li>
					<Link
						to="/"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
					>
						Contact
					</Link>
				</li>
			</ul>
			<ul className="flex flex-1 gap-8 items-center justify-center my-6">
				<li>
					<a href="https://github.com/Nuno111">
						<GithubSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/nuno-gregorio-16b93a119/">
						<LinkedinSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/nuno_carro/">
						<InstagramSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/nuno.gregorio.5/">
						<FacebookSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
			</ul>
			<div className="flex flex-1 flex-col items-center justify-center my-6 text-xl">
				<p>@ 2021</p>
				<p>
					Createdy By{" "}
					<span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
						N
					</span>
					uno{" "}
					<span className="dark:text-darkTxtPrimary text-lightTxtPrimary">
						C
					</span>
					arro
				</p>
			</div>
		</footer>
	);
};

export default Footer;
