import { Fragment } from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";
import ProjectsChallenge from "../components/ProjectsChallenge";
import Image from "../ui/Image";
import aCTNutrientsSheet from "../assets/automatedCaloriesTrackerNutrientsSheet.jpg";
import aCTSpreadsheet from "../assets/automatedCaloriesTrackerSpreadsheet.jpg";

const CaloriesTracker = () => {
  const overview = (
    <Fragment>
      <p>
        Automated Calories Tracker is a script I wrote in Python which uses an
        unofficial MyFitnessPal API to fetch macronutrients data from a user and
        exports it into a google spreadsheet.
      </p>
      <p>
        I wrote this script for an Online Personal Trainer in order to improve
        her online services by removing the boring work each client had to do
        when manually inputting their data into the spreadsheet.
      </p>
      <p>This spreadsheet was co-created by me and works as follows:</p>
      <ul className="flex flex-col gap-4 px-8 list-disc">
        <li>Run the script with the username and the range of data required</li>
        <li>Data is exported onto a sheet called MyFitnessPal</li>
        <li>
          Formulas fetch that data and use it on another sheet to calculate
          averages
        </li>
      </ul>
      <code
        className={`bold m-auto p-4 dark:bg-darkBgSecondary bg-gray-200
        rounded-lg shadow-lg lg:w-1/2`}
      >
        python myfitnesspal.py nuno_c11 2021/01/01 2021/01/29
      </code>
      <div className="grid grid-cols-1 gap-8 px-4 py-4 lg:gap-12 lg:grid-cols-2">
        <Image
          src={aCTSpreadsheet}
          alt="Macronutriens table on a google spreadsheet"
          dynamicClasses="rounded-lg"
        />
        <Image
          src={aCTNutrientsSheet}
          alt="Macronutriens table on a google spreadsheet"
          dynamicClasses="rounded-lg"
        />
      </div>
    </Fragment>
  );

  const approach = (
    <Fragment>
      <p>
        Since I barely knew any Python at this stage the first thing I did
        before actually going forward with the project was to learn how the API
        worked and decide if it was easy enough to learn the Python skills
        necessary to implement the script.
      </p>
      <p>
        Once I understood how the API worked I started googling how to do X and
        Y in Python, understood the very basics of Python data structures and
        implemented a Minimum Viable Product(MVP) to start testing.
      </p>
      <p>
        Luckily the API didn't give me many problems with installation and setup
        and in a few days, I was able to make this work as I wanted.
      </p>
    </Fragment>
  );

  const challenges = (
    <Fragment>
      <ProjectsChallenge
        title="Being friend with errors"
        content="Figuring out how to work with errors from the API was
				cumbersome. I had to do plenty of tests to figure out 
				which inputs would work and restricted user input to a very specific format."
        success={true}
      />
      <ProjectsChallenge
        title="Dealing with Google auth system"
        content="It wasn't very hard but definitely a challenge,
				being the first time I dealt with this I had to follow a short online tutorial
				that guided me on how to set this up. Safe to say I understood the concept but would
				require more work with this to fully understand how it works."
        success={true}
      />
      <ProjectsChallenge
        title="Go live by creating a SPA"
        content="Putting the script online with a Single Page Application 
				would allow a user to have an account and run the script through a form.
				This requires some back-end knowledge, to safely handle sensitive data such 
				as user login/password and google auth token, which I have yet to learn."
      />
    </Fragment>
  );

  return (
    <ProjectsTemplate
      title="Automated Calories Tracker"
      overview={overview}
      approach={approach}
      challenges={challenges}
      githubPath="https://github.com/Nuno111/Automated-calories-tracker"
    />
  );
};

export default CaloriesTracker;
