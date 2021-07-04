import { Link } from "react-router-dom";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/linkedin.svg";

const Footer = () => {
	return (
		<footer
			className="dark:border-darkTxtPrimary flex flex-col gap-2
			lg:grid lg:gap-8 lg:grid-cols-3 items-center  justify-center mt-20 
			border-t-2 border-solid border-lightTxtPrimary "
		>
			<ul className="flex flex-col gap-2 items-center my-6">
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
			<ul className="flex gap-8 items-center justify-center my-6">
				<li>
					<a
						href="https://github.com/Nuno111"
						target="_blank"
						rel="noreferrer"
					>
						<GithubSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/nuno-gregorio-16b93a119/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedinSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/nuno_carro/"
						target="_blank"
						rel="noreferrer"
					>
						<InstagramSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/nuno.gregorio.5/"
						target="_blank"
						rel="noreferrer"
					>
						<FacebookSvg className="w-8 h-8 dark:text-darkTxtPrimary fill-current" />
					</a>
				</li>
			</ul>
			<div className="flex flex-col items-center justify-center my-6 text-xl">
				<p>@ 2021</p>
				<p>
					Created By{" "}
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
