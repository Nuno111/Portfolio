import { Fragment } from "react";
import ftPrintfRequirements from "../assets/ftPrintfRequirements.jpg";
import ftPrintfUnitTest from "../assets/ftPrintfUnitTest.jpg";
import ftPrintfUnitTests from "../assets/ftPrintfUnitTests.jpg";
import ProjectTemplate from "../components/ProjectTemplate";
import Image from "../components/Image";
import ChallengeTemplate from "../components/ChallengeTemplate";

const Ft_Printf = () => {
  const overview = (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-between">
        <p>
          Ft_printf is a project from 42 school that
          requires us to create a function that mimics the
          printf function which is defined in stdio.h header
          file.
        </p>
        <p>
          As seen on the image, the requirements are quite
          extensive, the function should be able to handle
          at least 9 different conversions as well a minimum
          of 4 flags, which can all be combined into a
          single function call.
        </p>
        <p>
          Not only that, and as per usual at 42, everything
          has to work perfectly (which is one of the reasons
          I love 42), no memory leaks are allowed, and the
          behaviour must be exactly the same as the original
          printf except for undefined behaviour.
        </p>
      </div>
      <Image
        src={ftPrintfRequirements}
        alt="Requirements for project"
        rounded={true}
      />
    </div>
  );

  const approach = (
    <Fragment>
      <p>
        The first thing I did was to understand how width
        and precision worked by reading and re-reading
        extensively Microsoft docs.
      </p>
      <p>
        Some tests were done and I started going for it.
        Only to realise a bit later that this was much more
        complicated than I had anticipated, especially how
        width and precision are dependant on each other and
        vary for each conversion.
      </p>
      <p>
        I went back to testing by running the original
        printf function with every single combination of
        flags and conversions I could think of in order to
        understand the ins and outs of printf, before
        rethinking my logic again.
      </p>
      <div
        className={`grid gap-8 grid-cols-1 px-4 py-4 lg:gap-12 lg:grid-cols-2`}
      >
        <Image
          src={ftPrintfUnitTest}
          alt="Command line interface with code written for tests"
          dynamicClasses="rounded-lg"
        />
        <Image
          src={ftPrintfUnitTests}
          alt="Command line interface with code written for tests"
          dynamicClasses="rounded-lg"
        />
      </div>
    </Fragment>
  );

  const challenges = (
    <Fragment>
      <ChallengeTemplate
        title="Dealing with flags interdependencies"
        content="This was difficult to deal with because I created a re-usable
				function that dealt with precision only and another with width.
        The problem here was that they behaved differently with each other
        depending on the type of conversion. To solve this I made these 2
        functions deal only with getting precision and width values and then 
        each conversion had its own logic to deal with this interdependency."
        success={true}
      />
      <ChallengeTemplate
        title="Negative input and me"
        content="Both width and precision have their own rules to deal 
				with negative numbers as inputs.
				My solution for this was to add another variable to my struct 
				in order to keep track if the value is negative, from there 
				I had to implement different logic on each conversion and 
				flag based on this bool variable."
        success={true}
      />
      <ChallengeTemplate
        title="Bonus part of the project"
        content="As with most projects at 42 you have the mandatory and
				the bonus parts for each project.
				For this project I decided the bonus wasn't worth doing, 
        since it just required us to do a few extra flags and conversions by
        applying more or less the same logic as before."
      />
    </Fragment>
  );

  return (
    <ProjectTemplate
      title="Ft_printf"
      overview={overview}
      approach={approach}
      challenges={challenges}
      githubPath="https://github.com/Nuno111/42Lisboa-level1-ft_printf"
    />
  );
};

export default Ft_Printf;
