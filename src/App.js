import { Route } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./ui/LoadingPage";
import Lazy from "./ui/Lazy";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

function App() {
  useGoogleAnalytics();

  return (
    <div
      className="text-dark dark:text-light font-sans text-lg
			dark:bg-darkBgPrimary bg-lightBgPrimary"
    >
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
        <Route path="/PrivacyPolicy">
          <Lazy.PrivacyPolicy />
        </Route>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
