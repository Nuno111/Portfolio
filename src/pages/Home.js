const Home = () => {
	return (
		<div className="h-screen dark:bg-darkBgPrimary bg-lightBgPrimary">
			<div className="container flex flex-col items-center pt-20">
				<div>
					<h2 className="font-title dark:text-darkTxtPrimary text-lightTxtPrimary text-6xl">
						Nuno Carro
					</h2>
				</div>
				<img
					src=""
					alt="Photograph of Nuno Carro Web Developer"
				/>
				<h1>
					Dynamic Front-End developer. I work with
					React and Tailwindcss to create modern
					single page web applications.
				</h1>
				<div>
					<button>Who am I</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
