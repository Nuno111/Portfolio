import React from "react";

const Lazy = {
	Projects: React.lazy(() => import("../pages/Projects")),
	About: React.lazy(() => import("../pages/About")),
	Cub3D: React.lazy(() => import("../pages/Cub3D")),
	FtPrintf: React.lazy(() => import("../pages/FtPrintf")),
	AutomatedCaloriesTracker: React.lazy(() =>
		import("../pages/AutomatedCaloriesTracker")
	),
};

export default Lazy;
