import { ReactComponent as StudentSvg } from "../assets/student.svg";

const AboutStudent = () => {
  const largeSvg = `inline mr-4 w-12 h-12 dark:text-darkTxtPrimary
  text-lightTxtPrimary fill-current lg:w-16 lg:h-16`;

  return (
    <section className="flex flex-col gap-6 py-6 md:text-xl xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <StudentSvg className={largeSvg} />
        </span>
        As a student
      </h3>
      <p>
        Most of my knowledge regarding web development comes
        from self study through different online courses and
        then applying what I learned into my own personal
        projects.
      </p>
      <p>
        Then I am also a student at 42 Lisbon. The way 42
        school works is that there are no teachers and all
        the learning is projected based and peer-to-peer
        learning.
      </p>
      <p>
        Each projects has it's own specificatons of what you
        are expected to do and all the learning has to be
        done on your own researching online and talking to
        your peers.
      </p>
      <p>
        The first few projects at 42 are mostly coded in c,
        and some others are related to system adminstration.
      </p>
      <p>
        Once the c learning is done, we move to c++ and the
        final project of the main cursus is a 5 person team
        project based on front-end and back-end web
        development.
      </p>
    </section>
  );
};

export default AboutStudent;
