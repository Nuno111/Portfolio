import Button from "../components/Button";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="container flex flex-col gap-10 items-center justify-center h-90v">
			<h1 className="txtPrimary text-4xl">
				Under construction, please come back later =)
			</h1>
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
				<Button text="Take me back to Home" />
			</Link>
		</section>
	);
};

export default About;
