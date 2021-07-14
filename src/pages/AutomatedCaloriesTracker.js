import { Fragment } from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import Image from "../components/Image";
import nutrients from "../assets/nutrients.jpg";
import fitnesspalSpreadsheet from "../assets/fitnesspalSpreadsheet.jpg";

const CaloriesTracker = () => {
	const overview = (
		<Fragment>
			<p>
				Automated Calories Tracker is a script I
				wrote in Python which uses an unofficial
				MyFitnessPal API to fetch macronutrients
				data from an user and exports it into a
				google spreadsheet. I co-created this
				spreadsheet with my girlfriend and
				implemented some formulas to fully automate
				the work each client had to do.
			</p>
			<p>
				I wrote this script for my girlfriend who is
				an Online Personal Trainer in order to
				improve her online services by removing the
				boring work each client had to do when
				manually inputting their data into the
				spreadsheet.
			</p>
			<p>In our spreadsheet this works as follows:</p>
			<ul className="flex flex-col gap-4 px-8 list-disc">
				<li>
					Run the script with the username and the
					range of data required
				</li>
				<li>
					Data is exported onto a sheet called
					MyFitnessPal
				</li>
				<li>
					Formulas fetch that data and use it on
					another sheet to calculate averages
				</li>
			</ul>
			<code className="bold p-4 dark:bg-darkBgSecondary rounded-lg">
				python myfitnesspal.py nuno_c11 2021/01/01
				2021/01/29
			</code>
			<div className="grid gap-8 grid-cols-1 px-4 py-4 lg:gap-12 lg:grid-cols-2">
				<Image
					src={fitnesspalSpreadsheet}
					alt="Macronutriens table on a google spreadsheet"
					rounded={true}
				/>
				<Image
					src={nutrients}
					alt="Macronutriens table on a google spreadsheet"
					rounded={true}
				/>
			</div>
		</Fragment>
	);

	const approach = (
		<Fragment>
			<p>
				Since I barely knew any Python at this stage
				the first thing I did before actually going
				forward with the project was to learn how
				the API worked and decide if it was easy
				enough in order to learn the Python skills
				neccessary to implement the script.
			</p>
			<p>
				Once I understood how the API worked i
				started googling how to do X and Y in
				Python, understood the very basics of Python
				data structures and implemented a Minimum
				Viable Product(MVP) to start testing .
			</p>
			<p>
				Luckly the API didn't give me much troubles
				with installation and setup and in a few
				days I was able to make this work as I
				wanted.
			</p>
		</Fragment>
	);

	const challenges = (
		<Fragment>
			<p>
				First challenge I had with this project was
				to understand how to work around errors,
				mainly input errors and missing data erros
				from the API.
			</p>
			<p>
				In order to solve this I restricted the
				input passed to the script to be exactly in
				in the format I wanted, I didnt work around
				various inputs as it would add alot more
				work.
			</p>
			<p>
				Another challenge I had was the possibility
				of creating a SPA with a login page in order
				for this script to be used by anyone outside
				of a local environment.
			</p>
			<p>
				This challenge is still to be conquered when
				I have more time available to work on this
				project as in order for this script to be
				used outside a local environment I would
				have to learn the back-end side of web
				development, most likely nodeJS but since
				this works with sensitive data I will have
				to put lots of hours learning the back-end
				in order to implement a safe login page and
				protected google auth tokens.
			</p>
		</Fragment>
	);

	return (
		<ProjectTemplate
			title="Automated Calories Tracker"
			overview={overview}
			approach={approach}
			challenges={challenges}
		/>
	);
};

export default CaloriesTracker;
