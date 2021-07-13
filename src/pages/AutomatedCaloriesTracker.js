import ProjectTemplate from "../components/ProjectTemplate";

const CaloriesTracker = () => {
	const img = (
		<img
			alt="Macronutriens table on a google spreadsheet"
			className="rounded-lg xl:place-self-center xl:w-3/4 xl:h-3/4"
		/>
	);
	return (
		<ProjectTemplate
			title="Automated Calories Tracker"
			description="This project is inspired by the world-famous Wolfenstein
			3D game, which was the first FPS ever."
			objective="Code a realistic 3D graphical representation of a maze
			from a first-person prespective. This project is writtten in C and
			explores the ray-casting technique."
			challenges="There was plenty of file parsing to be done but
			where I had troubles was that the map had to be surrounded by walls 
			and spaces were allowed, I had to use a complex
			logic by surrounding the map with extra values to avoid seg fault 
			when checking map borders."
			challenges1="Another
			challenge for me was to create the textured walls, I was able to implement
			untextured walls without looking up any prior implementation but in
			the end I had to follow a step-by-step guide to draw textured walls."
			conclusion="This project allowed me to see how games are built at their core,
			since I had to create my own game-engine to draw the game with a very
			basic graphics library and the raycasting technique. Not enough to actually
			evaluate if game dev is my cup of tea but if I had to based on this
			experience alone I would say it's not."
			img={img}
			img2={img}
		/>
	);
};

export default CaloriesTracker;
