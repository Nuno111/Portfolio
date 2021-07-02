import Button from "../components/Button";
import LandingSvg from "../images/vectorpaint.svg";

const Home = () => {
	return (
		<div className="dark:bg-darkBgPrimary bg-lightBgPrimary">
			<div className="container flex flex-col gap-4 md:gap-12 items-center justify-center py-6 min-h-90v">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary font-title text-5xl">
					Nuno Carro
				</h2>
				{/* Need to remove shadow if unnoticed*/}
				<img
					src={LandingSvg}
					alt="Photograph of Nuno Carro Web Developer"
					className="align-middle my-10 w-3/4 h-auto lg:my-0 lg:w-1/2"
				/>
				<h1 className="text-center font-title text-xl md:text-2xl lg:text-4xl">
					Dynamic Front-End web developer. I work
					with React and Tailwindcss to create
					modern single-page web applications.
				</h1>
				<Button text="About Me" />
			</div>
		</div>
	);
};

export default Home;
