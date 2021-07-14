import { Link } from "react-router-dom";

const Image = ({ src, alt, linkPath, externalLink }) => {
	const image =
		linkPath && externalLink ? (
			<a
				target="_blank"
				rel="noreferrer"
				href={linkPath}
				className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out"
			>
				<img
					src={src}
					alt={alt}
					className="absolute w-full h-full rounded-lg object-cover"
				/>
			</a>
		) : linkPath ? (
			<Link
				to={linkPath}
				className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out"
			>
				<img
					src={src}
					alt={alt}
					className="absolute w-full h-full object-cover"
				/>
			</Link>
		) : (
			<div className="relative pb-3/4 transform hover:scale-110 duration-500 ease-in-out">
				<img
					src={src}
					alt={alt}
					className="absolute w-full h-full object-cover"
				/>
			</div>
		);

	return image;
};

export default Image;
