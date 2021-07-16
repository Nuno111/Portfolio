import ProjectTemplate from "../components/ProjectTemplate";
import gameplay from "../assets/cub3dgameplay.jpg";
import gameplay2 from "../assets/cub3dgameplay.jpg";

const Cub3D = () => {
	return (
		<ProjectTemplate
			title="cub3D"
			description="This project is inspired by the world-famous Wolfenstein
			3D game, which was the first FPS ever."
			objective="Code a realistic 3D graphical representation of a maze
			from a first-person prespective. This project is writtten in C and
			explores the ray-casting technique."
			challenges="A configuration file is given to render the game with 
			path to sprites, resolution, etc. This file needs to be parsed and validated,
			one requirement being that the map has to be surrounded by walls. 
			I had to use a complex logic to solve this by surrounding the map
			with extra values to avoid segmentation fault when checking map borders."
			challenges1="Another
			big challenge for me was to create the textured walls, I was able to implement
			untextured walls without looking up any prior implementation but in
			the end I had to follow a step-by-step guide to draw textured walls."
			conclusion="This project allowed me to see how games are built at their core,
			since I had to create my own game-engine to draw the game with a very
			basic graphics library and the raycasting technique. Not enough to actually
			evaluate if game dev is my cup of tea but if I had to based on this
			experience alone I would say it's not."
		/>
	);
};

export default Cub3D;
