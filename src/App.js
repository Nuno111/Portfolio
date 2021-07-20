import { Route, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import ReactGA from "react-ga";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import Lazy from "./components/Lazy";

function App() {
	/* Init for google analytics */
	let location = useLocation();
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			ReactGA.initialize("UA-202596498-1");
			window.GA_INITIALIZED = true;
		}
		ReactGA.set({ page: location.pathname });

		ReactGA.pageview(window.location.pathname);
	}, [location]);

	return (
		<div className="text-dark dark:text-light font-sans text-lg dark:bg-darkBgPrimary bg-lightBgPrimary">
			{/* Robots to text needs to be looked into before production*/}
			<Navbar />
			<Route exact path="/">
				<Home />
			</Route>
			<Suspense fallback={<LoadingPage />}>
				<Route path="/about">
					<Lazy.About />
				</Route>
				<Route exact path="/projects">
					<Lazy.Projects />
				</Route>
				<Route path="/projects/cub3D">
					<Lazy.Cub3D />
				</Route>
				<Route path="/projects/FtPrintf">
					<Lazy.FtPrintf />
				</Route>
				<Route path="/projects/AutomatedCaloriesTracker">
					<Lazy.AutomatedCaloriesTracker />
				</Route>
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
