import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as PhoneSvg } from "../assets/phone.svg";
import HomeContactCard from "../components/HomeContactCard";

const HomeContact = () => {
  const svgClass = "dark:group-hover:text-darkTxtPrimary w-20 h-20 group-hover:text-lightTxtPrimary fill-current";

  const emailSvg = <EmailSvg className={svgClass} />;

  const phoneSvg = <PhoneSvg className={svgClass} />;

  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center"
    >
      <h3 className="section-title">Get In Touch</h3>
      <p
        className={`text-center text-xl leading-loose sm:px-4
        md:text-2xl lg:px-8 lg:text-3xl xl:px-20`}
      >
        I'd love to hear you from, whether you want to
        discuss new opportunities, talk about my projects,
        give some feedback or just want to have a chat.
      </p>
      <ul
        className={`justify-center flex flex-col gap-20
        items-center py-20 sm:flex-row`}
      >
        <HomeContactCard
          href="mailto:nunocarro111@gmail.com"
          svg={emailSvg}
          title="Email"
          content="nunocarro111@gmail.com"
        />
        <HomeContactCard
          href="tel:+351912950619"
          svg={phoneSvg}
          title="Mobile"
          content="+351 931 945 351"
        />
      </ul>
    </section>
  );
};

export default HomeContact;
