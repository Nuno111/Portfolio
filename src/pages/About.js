import myself from "../assets/myself.jpg";
import Button from "../components/Button";
import { ReactComponent as PersonalSvg } from "../assets/personal.svg";
import Image from "../components/Image";
import vrsa from "../assets/vila-real-santo-antonio.jpg";

const About = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <main className="container">
      <section
        className={`hero-height pt-4 lg:gap-12 lg:pt-0 lg:grid lg:grid-cols-2`}
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
        <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
          <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            <span>
              <PersonalSvg className={largeSvg} />
            </span>
            Personal Story
          </h3>
          <p>
            Born and raised in a seaside town on the south
            coast of Portugal, a beautiful country with a
            lovely weather but with low potential for
            personal growth. Before I left Portugal and went
            to live in the UK for around 5 years I was stuck
            working part-time catering jobs during summer
            and laid-off once the high season finished.
          </p>
          <figure>
            <Image
              src={vrsa}
              alt="Vila Real de Santo António"
            />
            <figcaption className="text-center">
              Vila Real de Santo António
            </figcaption>
          </figure>
          <p>
            I can safely say this was the best decision I've
            ever made because moving away to another country
            alone with just enough money to survive one or
            two months, no job lined up and just a shared
            room in a house really made me who I am today.
          </p>
          <p>
            I've faced challenges I would never had if I had
            stayed close to home. I learned how to fight for
            my myself and my objectives as well as endure
            all the difficulties I had to face along the
            way.
          </p>
          <p>
            Moving away from everything I always took for
            granted also gave me a different prespective on
            everything I have and taught me to appreciate it
            more.
          </p>
          <p>
            For the same reason above I moved back to
            Portugal in 2021 to persue my career as a web
            developer and be closer to all my friends and
            family.
          </p>
        </section>
      </article>
    </main>
  );
};

export default About;
