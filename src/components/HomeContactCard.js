import helpers from "../utils/helpers";

const HomeContactCard = ({ href, svg, title, content }) => {
  return (
    <li
      className={`group flex flex-col gap-4
      items-center justify-center`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-4"
        onClick={() => helpers.trackEvent("Link", title, "From Contact")}
      >
        {svg}
        <h4 className="text-xl sm:text-2xl lg:text-3xl">{title}</h4>
        <p
          className={`border-b-2 border-solid dark:border-darkTxtPrimary
        border-lightTxtPrimary sm:text-xl lg:text-2xl`}
        >
          {content}
        </p>
      </a>
    </li>
  );
};

export default HomeContactCard;
