import { Link } from "react-router-dom";

const Image = ({ src, alt, linkPath, externalLink, dynamicClasses }) => {
  const extraClasses = dynamicClasses ? dynamicClasses : "";

  /* Will only have transition scale if it's a link image*/
  const scaled =
    linkPath || externalLink
      ? "transform hover:scale-110 duration-500 ease-in-out"
      : "";

  const img = (
    <img
      src={src}
      alt={alt}
      className={`${extraClasses} ${scaled} absolute w-full h-full object-cover`}
    />
  );

  const imageComponent =
    linkPath && externalLink ? (
      <a
        target="_blank"
        rel="noreferrer"
        href={linkPath}
        className="relative pb-3/4"
      >
        {img}
      </a>
    ) : linkPath ? (
      <Link to={linkPath} className="relative pb-3/4">
        {img}
      </Link>
    ) : (
      <div className="relative pb-3/4">{img}</div>
    );

  return imageComponent;
};

export default Image;
