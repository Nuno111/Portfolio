import myself from "../assets/myself.jpg";
import Button from "../components/Button";
import { ReactComponent as PersonalSvg } from "../assets/personal.svg";
import { ReactComponent as ProfessionalSvg } from "../assets/professional.svg";
import Image from "../components/Image";
import vilamoura from "../assets/vilamoura.jpg";
import Gallery from "../components/Gallery";

const About = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  const personalStory = (
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
        I left Portugal in 2015 and moved to the UK where i
        lived for about 5 years. Before moving to the UK I
        was stuck working part-time jobs in the catering
        industry during the summer months and unemplyed
        after that since work is scarse in the Algarve after
        the summer months.
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
        cycle everywhere I can. I live around 35km away from
        the school, where I go around 2/3 times a week which
        is 70km I have to cycle on those days. On the other
        hand i'm also a gamer so if there's a new game out I
        really want to play I wont be moving much at all.
      </p>
      <p>
        When I go on holidays I like to go to sunny places
        and explore around. My biggest and favorite trips so
        far have been to the Philippines and Sri Lanka,
        where I spent 2/3 weeks travelling around the
        country and meeting the locals, never staying in the
        same place for more than a few days.
      </p>
      <Gallery />
    </section>
  );

  const professionalStory = (
    <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <ProfessionalSvg className={largeSvg} />
        </span>
        Professional Story
      </h3>
      <p></p>
    </section>
  );

  return (
    <main className="container">
      <section
        className={`hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid  lg:grid-cols-2`}
      >
        <div className="flex flex-col gap-6 items-center justify-center pb-4 h-1/2 lg:gap-16 lg:items-start lg:h-full">
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            Welcome!
          </h2>
          <p className="text-center text-xl leading-loose lg:text-left xl:text-3xl">
            Please scroll down to read more about myself or
            download my CV for a quick TLDR.
          </p>
          <a
            href="../assets/curriculum.pdf"
            className="self-center lg:self-start"
          >
            <Button text="Download CV" />
          </a>
        </div>
        <img
          className="self-center mx-auto p-6 w-full h-1/2 object-cover object-top lg:p-0 lg:h-3/4"
          src={myself}
          alt=""
        />
      </section>
      <article>
        {personalStory}
        {professionalStory}
      </article>
    </main>
  );
};

export default About;
