import Button from "../components/Button";
import LandingSvg from "../images/vectorpaint.svg";

const Home = () => {
	return (
		<div className="h-screen dark:bg-darkBgPrimary bg-lightBgPrimary">
			<div className="container flex flex-col items-center justify-center h-screen space-y-10">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary font-title text-4xl">
					Nuno Carro
				</h2>
				<div className="py-6 w-full">
					{/* Need to remove shadow if unnoticed*/}
					<img
						src={LandingSvg}
						alt="Photograph of Nuno Carro Web Developer"
						className="shadow-4xl align-middle m-auto w-full lg:w-1/2 h-auto"
					/>
				</div>
				<h1 className="text-center font-title text-xl">
					Dynamic Front-End web developer. I work
					with React and Tailwindcss to create
					modern single-page web applications.
				</h1>
				<div>
					<Button text="About Me" />
				</div>
			</div>
		</div>
	);
};

export default Home;
