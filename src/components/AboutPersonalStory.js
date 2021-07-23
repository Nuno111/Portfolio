import AboutGallery from "../components/AboutGallery";
import Image from "../ui/Image";
import vilamoura from "../assets/vilamoura.jpg";
import { ReactComponent as PersonalSvg } from "../assets/personal.svg";

const AboutPersonalStory = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <PersonalSvg className={largeSvg} />
        </span>
        Personal Story
      </h3>
      <p>
        Born and raised in a seaside town called Vila Real
        de Santo António on the south coast of Portugal, a
        beautiful country with a lovely weather and great
        quality of life.
      </p>
      <p>
        I left Portugal in 2015 and moved to the UK where I
        lived for about 5 years. Before moving to the UK I
        was stuck working part-time jobs in the catering
        industry during the summer months and unemplyed
        after that since work is scarse in the Algarve
        region after the summer months.
      </p>
      <figure className="py-4 lg:mx-auto lg:w-3/4">
        <Image src={vilamoura} alt="Vilamoura" />
        <figcaption className="text-center">
          Vilamoura - Algarve
        </figcaption>
      </figure>
      <p>
        I can safely say this was the best decision I've
        ever made because moving away to another country
        alone with just enough money to survive one or two
        months, no job lined up and just a shared room in a
        house really made me who I am today.
      </p>
      <p>
        I've faced challenges I would never had if I had
        stayed close to home. I learned how to fight for my
        myself and my objectives as well as overcome all the
        difficulties I had to face along the way.
      </p>
      <p>
        Moving away from everything I always took for
        granted also gave me a different prespective on
        everything I have and taught me to appreciate it
        more.
      </p>
      <p>
        For the same reason above I moved back to Portugal
        in 2021 to pursue my career as a web developer and
        be closer to all my friends and family.
      </p>
      <p>
        Since most part of my day is spent sitting at desk,
        I like to have hobbies that are spent outside and
        moving. I go to the gym 3/4 weeks a week and try to
        cycle everywhere I can. I also enjoy other sport
        such as tennis and bouldering. On the other hand i'm
        also a gamer so if there's a new game out I really
        want to play I wont be moving much at all.
      </p>
      <p>
        When I go on holidays I like to go to sunny places
        and explore around. My biggest and favorite trips so
        far have been to the Philippines and Sri Lanka,
        where I spent 2/3 weeks travelling around the
        country and meeting the locals, never staying in the
        same place for more than a few days.
      </p>
      <AboutGallery />
    </section>
  );
};

export default AboutPersonalStory;
