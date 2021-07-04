import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
			<Route path="/projects">
				<Projects />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Footer />
		</div>
	);
}

export default App;
