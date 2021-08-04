import ReactGA from "react-ga";

const helpers = {
  trackEvent: (cat, act, label) => {
    ReactGA.event({
      category: cat,
      action: act,
      label: label,
    });
  },
};

export default helpers;
