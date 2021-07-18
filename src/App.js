import { Route } from "react-router-dom";
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
	useEffect(() => {
		ReactGA.initialize("G-04C6ZGGNZQ");

		ReactGA.pageview(window.location.pathname);
	}, []);

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
