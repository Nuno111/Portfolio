import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/linkedin.svg";

const Footer = () => {
	return (
		<footer
			className="flex gap-2
			lg:grid flex-col items-center justify-center mt-10 font-bold
			dark:bg-darkBgSecondary bg-lightBgSecondary border-t-2 border-solid dark:border-darkTxtPrimary border-lightTxtPrimary lg:gap-8 lg:grid-cols-3 lg:mt-20"
		>
			<ul className="flex flex-col gap-2 items-center my-6">
				<li>
					<Link
						to="/"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							})
						}
					>
						Home
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
					<HashLink
						smooth
						to="/#contact"
						className="dark:hover:text-darkTxtPrimary hover:text-lightTxtPrimary"
					>
						Contact
					</HashLink>
				</li>
			</ul>
			<ul className="flex gap-8 items-center justify-center my-6">
				<li>
					<a
						href="https://github.com/Nuno111"
						target="_blank"
						rel="noreferrer"
					>
						<GithubSvg className="w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/nuno-gregorio-16b93a119/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedinSvg className="w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/nuno_carro/"
						target="_blank"
						rel="noreferrer"
					>
						<InstagramSvg className="w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/nuno.gregorio.5/"
						target="_blank"
						rel="noreferrer"
					>
						<FacebookSvg className="w-8 h-8 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current" />
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
