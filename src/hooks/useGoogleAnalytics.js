import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";

const useGoogleAnalytics = () => {
  let location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-202596498-1");
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });

    ReactGA.pageview(window.location.pathname);
  }, [location]);
};

export default useGoogleAnalytics;
