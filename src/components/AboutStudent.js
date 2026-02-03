import { ReactComponent as StudentSvg } from "../assets/student.svg";

const AboutStudent = () => {
  return (
    <section className="flex flex-col gap-6 pb-6 pt-12 md:text-xl lg:gap-12 lg:pb-10 lg:pt-16 xl:text-2xl">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        <span>
          <StudentSvg className="inline mr-4 w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current lg:w-16 lg:h-16" />
        </span>
        As a student
      </h3>
      <p>
        Most of my knowledge regarding web development comes from self-study
        through different online courses and then applying what I learned to my
        own personal projects.
      </p>
      <p>
        I am a strong believer in continuous learning and always strive to
        expand my skill set. I regularly explore new technologies, frameworks,
        and best practices, both through structured courses and hands-on
        experimentation. This curiosity has led me to dive into areas like
        security, where I was able to identify and report critical
        vulnerabilities in a professional environment, helping to improve the
        safety and reliability of real-world applications.
      </p>
      <p>
        Whether it's keeping up with the latest trends in software development,
        experimenting with new tools, or tackling challenging problems, I am
        committed to growing as a developer and staying adaptable in a
        fast-changing field.
      </p>
    </section>
  );
};

export default AboutStudent;
