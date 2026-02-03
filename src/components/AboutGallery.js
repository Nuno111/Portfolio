import hatSriLanka from "../assets/hatSriLanka.jpg";
import nineArchBridge from "../assets/nineArchBridge.jpg";
import porto from "../assets/porto.jpg";
import madeira from "../assets/madeira.jpg";

const AboutGallery = () => {
  const imgClass =
    "w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105";

  return (
    <section className="grid gap-6 grid-cols-1 justify-items-center mx-auto my-8 max-w-4xl sm:grid-cols-2 md:grid-cols-3">
      <img
        className={imgClass}
        src={hatSriLanka}
        alt="Nuno with a traditional hat"
      />
      <img
        className={imgClass}
        src={nineArchBridge}
        alt="Nuno at Nine Arch Bridge in Ella"
      />
      <img className={imgClass} src={porto} alt="Nuno near a bridge in Porto" />
      <img
        className={imgClass}
        src={madeira}
        alt="Nuno sitting with cliffs in the background"
      />
    </section>
  );
};

export default AboutGallery;
