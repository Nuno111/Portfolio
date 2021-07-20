import { Fragment } from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import ChallengeTemplate from "../components/ChallengeTemplate";
import Image from "../components/Image";
import cub3dGameplay from "../assets/cub3dGameplay.jpg";
import cub3dMaze from "../assets/cub3dMaze.jpg";

const Cub3D = () => {
  const overview = (
    <Fragment>
      <p>
        Inspired by the world-famous Wolfenstein 3D, which
        was the first FPS ever, cub3D is another project
        from 42 school with the objective to code a
        realistic 3D graphical representation of a maze from
        a first-person perspective. It's written in C and
        explores the ray-casting technique.
      </p>
      <p>
        This was a lengthy project but very interesting, it
        allowed me to understand how game engines work
        behind the hood since we are only allowed to use a
        minimalistic graphics library. In order to render
        the game, we have to work very closely with every
        single pixel that is displayed on the screen.
      </p>
      <div className="grid gap-8 grid-cols-1 px-4 py-4 lg:gap-12 lg:grid-cols-2">
        <Image
          src={cub3dGameplay}
          alt="View of a maze in first person prespective game"
          dynamicClasses="rounded-lg"
        />
        <Image
          src={cub3dMaze}
          alt="View of a maze in first person prespective game"
          dynamicClasses="rounded-lg"
        />
      </div>
    </Fragment>
  );

  const approach = (
    <Fragment>
      <p>
        I started by reading the docs of minilibx (42
        minimalistic graphics library) to learn how to
        render an image with basic elements such as squares
        and rectangles.
      </p>
      <p>
        Once that was out of the way I went on parsing all
        user input and map settings. This was a slow and
        tedious process, there was a lot of validation to be
        done and plenty of ways for the user to give its
        input.
      </p>
      <p>
        For the next step, I decided that the best way to
        learn the raycasting technique was to start by
        rendering the minimap. This was a wise choice since
        it allowed me to understand and implement the
        raycasting technique which was then used as well to
        render textured walls and sprites.
      </p>
    </Fragment>
  );

  const challenges = (
    <Fragment>
      <ChallengeTemplate
        title="Ensuring map is enclosed by walls"
        content="A configuration file is given to render the game with 
				the path to sprites, resolution, etc. This file needs to be parsed and
        validated, one requirement is that the map has to be surrounded by
        walls. To solve this I surrounded the map with extra values to avoid 
        segmentation faults when checking for map borders."
        success={true}
      />
      <ChallengeTemplate
        title="Rendering textured walls"
        content="Rendering textures walls was a difficult process for me, 
				I hadn't looked up anything on how to render walls yet and tried 
				to implement it on my own. I was only able to render
				untextured walls this way and they had uneven edges. 
				After many tries and headaches, I finally decided
				to do some research and find a way the logic to make them work."
        success={true}
      />
      <ChallengeTemplate
        title="Rendering textured ceiling and floor"
        content="This is one of the bonus parts for this project along 
				with minimap and many others. At first, I had decided I was going
				to have this one and a few others more done. But since I had already 
        spent way more time with this project  than I had anticipated I felt
        the need to move on and continue with the other 42 projects exploring
        different concepts in different areas."
      />
    </Fragment>
  );
  return (
    <ProjectTemplate
      title="cub3D"
      overview={overview}
      approach={approach}
      challenges={challenges}
      githubPath="https://github.com/Nuno111/42Lisboa-level4-cub3D"
    />
  );
};

export default Cub3D;
