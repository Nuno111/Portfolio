import { ReactComponent as SuccessSvg } from "../assets/success.svg";
import { ReactComponent as WaitingSvg } from "../assets/waiting.svg";

const ChallengeTemplate = ({ title, content, success }) => {
	const svg = success ? (
		<SuccessSvg className="inline mr-4 w-8 h-8 dark:text-darkTxtPrimary fill-current lg:w-10 lg:h-10" />
	) : (
		<WaitingSvg className="inline mr-4 w-8 h-8 dark:text-darkTxtPrimary fill-current lg:w-10 lg:h-10" />
	);

	return (
		<li className="px-4 lg:px-12 flex flex-col gap-10">
			<h6 className="text-2xl md:text-3xl lg:text-4xl">
				<span>{svg}</span>
				{title}
			</h6>
			<p>{content}</p>
		</li>
	);
};

export default ChallengeTemplate;
