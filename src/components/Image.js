import { Link } from "react-router-dom";

const Image = ({
	src,
	alt,
	linkPath,
	externalLink,
	dynamicClasses,
}) => {
	const extraClasses = dynamicClasses
		? dynamicClasses
		: "";

	const img = (
		<img
			src={src}
			alt={alt}
			className={`${extraClasses} absolute w-full h-full object-cover`}
		/>
	);

	const imageComponent =
		linkPath && externalLink ? (
			<a
				target="_blank"
				rel="noreferrer"
				href={linkPath}
				className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out"
			>
				{img}
			</a>
		) : linkPath ? (
			<Link
				to={linkPath}
				className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out"
			>
				{img}
			</Link>
		) : (
			<div className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out">
				{img}
			</div>
		);

	return imageComponent;
};

export default Image;
