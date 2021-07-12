import ProjectTemplate from "../components/ProjectTemplate";
import ProjectImg from "../assets/sampleproject.jpg";

const Cub3D = () => {
	const img = (
		<img
			src={ProjectImg}
			alt="3d first person shooter game"
			className="rounded-lg xl:place-self-center xl:w-3/4 xl:h-3/4"
		/>
	);
	return (
		<ProjectTemplate
			title="cub3D"
			description="Lorem neque optio placeat blanditiis
					animi? Expedita corrupti magni suscipit
					necessitatibus laboriosam consequuntur
					Facere possimus error ipsum maxime
					magnam quaerat. Ex eaque repellendus
					laborum ad eum Porro sed fugit debitis."
			objective="Lorem neque optio placeat blanditiis
					animi? Expedita corrupti magni suscipit
					necessitatibus laboriosam consequuntur
					Facere possimus error ipsum maxime
					magnam quaerat. Ex eaque repellendus
					laborum ad eum Porro sed fugit debitis."
			challenges="Lorem neque optio placeat blanditiis
					animi? Expedita corrupti magni suscipit
					necessitatibus laboriosam consequuntur
					Facere possimus error ipsum maxime
					magnam quaerat. Ex eaque repellendus
					laborum ad eum Porro sed fugit debitis."
			conclusion="Lorem neque optio placeat blanditiis
					animi? Expedita corrupti magni suscipit
					necessitatibus laboriosam consequuntur
					Facere possimus error ipsum maxime
					magnam quaerat. Ex eaque repellendus
					laborum ad eum Porro sed fugit debitis."
			img={img}
			img2={img}
		/>
	);
};

export default Cub3D;
