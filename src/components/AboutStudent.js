import { ReactComponent as StudentSvg } from "../assets/student.svg";

const AboutStudent = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 pb-6 pt-12 md:text-xl lg:gap-12 lg:pb-10 lg:pt-16 xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <StudentSvg className={largeSvg} />
        </span>
        As a student
      </h3>
      <p>
        Most of my knowledge regarding web development comes
        from self-study through different online courses and
        then applying what I learned to my own personal
        projects.
      </p>
      <p>
        I am also a student at 42 Lisbon. The way 42 school
        works is that there are no teachers and all the
        learning is projected based and peer-to-peer
        learning.
      </p>
      <p>
        Each project has its own specifications of what you
        are expected to do and all the learning is done
        through your own research and discussion with your
        peers.
      </p>
    </section>
  );
};

export default AboutStudent;
