import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalProjects from "./pages/PersonalProjects";
import ProfessionalProjects from "./pages/ProfessionalProjects";
import Cub3D from "./pages/Cub3D";
import FtPrintf from "./pages/FtPrintf";
import Portfolio from "./pages/Portfolio";
import AutomatedCaloriesTracker from "./pages/AutomatedCaloriesTracker";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  useGoogleAnalytics();

  return (
    <div className="text-dark dark:text-light font-sans text-lg dark:bg-darkBgPrimary bg-lightBgPrimary">
      <ScrollToTop />
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route exact path="/professional-projects">
        <ProfessionalProjects />
      </Route>
      <Route exact path="/personal-projects">
        <PersonalProjects />
      </Route>
      <Route exact path="/personal-projects/portfolio">
        <Portfolio />
      </Route>
      <Route path="/personal-projects/cub3D">
        <Cub3D />
      </Route>
      <Route path="/personal-projects/FtPrintf">
        <FtPrintf />
      </Route>
      <Route path="/personal-projects/AutomatedCaloriesTracker">
        <AutomatedCaloriesTracker />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
