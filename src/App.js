import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Cub3D from "./pages/Cub3D";
import FtPrintf from "./pages/FtPrintf";
import Portfolio from "./pages/Portfolio";
import AutomatedCaloriesTracker from "./pages/AutomatedCaloriesTracker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  useGoogleAnalytics();

  return (
    <div
      className="font-sans text-lg text-dark dark:text-light dark:bg-darkBgPrimary bg-lightBgPrimary"
    >
      <ScrollToTop />
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
      <Route exact path="/projects/portfolio">
        <Portfolio />
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
      <Footer />
    </div>
  );
}

export default App;
