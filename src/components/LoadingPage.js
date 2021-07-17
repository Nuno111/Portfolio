import { ReactComponent as LoadingSvg } from "../assets/loading.svg";

const LoadingPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-90v">
			Please hold while the content loads.
			<LoadingSvg className="inline w-1/2 h-1/2 fill-current animate-spin" />
		</div>
	);
};

export default LoadingPage;
