import Button from "../components/Button";

const Home = () => {
	return (
		<div className="h-screen dark:bg-darkBgPrimary bg-lightBgPrimary">
			<div className="container flex flex-col items-center justify-center h-full">
				<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary font-title text-4xl">
					Nuno Carro
				</h2>
				<div className="py-6 w-6/12 sm:w-2/12">
					{/* Need to remove shadow if unnoticed*/}
					<img
						src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
						alt="Photograph of Nuno Carro Web Developer"
						className="shadow-4xl align-middle max-w-full h-auto rounded-full"
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
