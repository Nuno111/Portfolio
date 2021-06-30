import { Route } from "react-router-dom";
import { Fragment } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<Fragment>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/projects">
				<Projects />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
		</Fragment>
	);
}

export default App;
