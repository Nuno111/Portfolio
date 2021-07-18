import { Route, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import ReactGA from "react-ga";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

const Projects = React.lazy(() =>
	import("./pages/Projects")
);

const About = React.lazy(() => import("./pages/About"));

const Cub3D = React.lazy(() => import("./pages/Cub3D"));

const AutomatedCaloriesTracker = React.lazy(() =>
	import("./pages/AutomatedCaloriesTracker")
);
const FtPrintf = React.lazy(() =>
	import("./pages/FtPrintf")
);

function App() {
	let location = useLocation();
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			ReactGA.initialize("UA-202596498-1");
			window.GA_INITIALIZED = true;
		}
		ReactGA.set({ page: location.pathname });

		ReactGA.pageview(window.location.pathname);
		console.log(location, window.location.pathname);
	}, [location]);

	return (
		<div className="text-dark dark:text-light font-main text-lg dark:bg-darkBgPrimary bg-lightBgPrimary">
			{/* Robots to text needs to be looked into before production*/}
			<Navbar />
			<Route exact path="/">
				<Home />
			</Route>
			<Suspense fallback={<LoadingPage />}>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route path="/projects/cub3D">
					<Cub3D />
				</Route>
				<Route path="/projects/FtPrintf">
					<FtPrintf />
				</Route>
				<Route path="/projects/AutomatedCaloriesTracker">
					<AutomatedCaloriesTracker />
				</Route>
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
