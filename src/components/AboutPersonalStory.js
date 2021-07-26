import AboutGallery from "../components/AboutGallery";
import { ReactComponent as PersonalSvg } from "../assets/personal.svg";

const AboutPersonalStory = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 py-6 md:text-xl lg:gap-12 lg:py-20 xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <PersonalSvg className={largeSvg} />
        </span>
        Personal Story
      </h3>
      <p>
        Born and raised in a seaside town called Vila Real
        de Santo António on the south coast of Portugal, a
        beautiful country with lovely weather and great
        quality of life.
      </p>
      <p>
        I got my high school diploma in Economics and
        started working summer jobs in the catering
        industry.
      </p>
      <p>
        In 2015 I moved to the UK in search for better
        growth opportunities, I lived and worked there for
        about 5 years before returning to Portugal to chase
        a career in Web Development and to be closer to my
        friends and family.
      </p>
      <p>
        Moving to the UK was the best decision I've ever
        made because moving away to another country alone
        with just enough money to sustain myself for about
        two months and no job lined up made me who I am
        today.
      </p>
      <p>
        Since most of my days are spent sitting at a desk, I
        like to have hobbies that involve exercise. I go to
        the gym 3/4 weeks a week and try to cycle everywhere
        I can. I also enjoy other sport such as tennis and
        bouldering. On the other hand, I'm also a gamer so
        if there's a new game out I desperately want to play
        then I won't be moving much at all.
      </p>
      <p>
        Whenever I go on holiday I try to go to sunny places
        and explore around. My favourite trips so far have
        been to the Philippines and Sri Lanka, where I spent
        2/3 weeks travelling around the country and meeting
        the locals, never staying in the same place for more
        than a few days.
      </p>
      <AboutGallery />
    </section>
  );
};

export default AboutPersonalStory;
