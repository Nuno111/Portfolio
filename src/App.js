import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="text-dark dark:text-light">
			<Navbar />
			<Route path="/">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route className="flex" path="/projects">
				<Projects />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
		</div>
	);
}

export default App;
