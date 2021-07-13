import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cub3D from "./pages/Cub3D";

function App() {
	return (
		<div className="text-dark dark:text-light font-main dark:bg-darkBgPrimary bg-lightBgPrimary">
			{/* Robots to text needs to be looked into before production*/}
			<Navbar />
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route exact path="/projects">
				<Projects />
			</Route>
			<Route path="/projects/cub3D">
				<Cub3D />
			</Route>
			<Footer />
		</div>
	);
}

export default App;
