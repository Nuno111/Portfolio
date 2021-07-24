import mudKart from "../assets/mudKart.jpg";
import hatSriLanka from "../assets/hatSriLanka.jpg";
import nineArchBridge from "../assets/nineArchBridge.jpg";
import nineArchBridgeElla from "../assets/nineArchBridgeElla.jpg";
import porto from "../assets/porto.jpg";
import madeira from "../assets/madeira.jpg";

const AboutGallery = () => {
  const imgClass = "w-full lg:w-1/4";
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      <img
        src={mudKart}
        className={imgClass}
        alt="Nuno and friend driving a cart in muddy roads"
      />
      <img
        className={imgClass}
        src={hatSriLanka}
        alt="Nuno with a tradicional hat"
      />
      <img
        className={imgClass}
        src={nineArchBridge}
        alt="Nuno at Nine Arch Bridge in Ella"
      />
      <img
        className={imgClass}
        src={nineArchBridgeElla}
        alt="Nuno with friends at Nine Arch Bridge in Ella"
      />
      <img
        className={imgClass}
        src={porto}
        alt="Nuno near a bridge in Porto"
      />
      <img
        className={imgClass}
        src={madeira}
        alt="Nuno sitting with cliffs in the background"
      />
    </section>
  );
};

export default AboutGallery;
