import beachNightSriLanka from "../assets/beachNightSriLanka.jpg";
import hatSriLanka from "../assets/hatSriLanka.jpg";
import nineArchBridge from "../assets/nineArchBridge.jpg";
import nineArchBridgeElla from "../assets/nineArchBridgeElla.jpg";
import sriPadaSriLanka from "../assets/sriPadaSriLanka.jpg";
import sunsetPhilippines from "../assets/sunsetPhilippines.jpg";
import isleOfWight from "../assets/isleOfWight.jpg";
import jardimBotanicoCoimbra from "../assets/jardimBotanicoCoimbra.jpg";

const AboutGallery = () => {
  const imgClass = "w-full lg:w-1/4";
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      <img
        src={beachNightSriLanka}
        className={imgClass}
        alt=""
      />
      <img className={imgClass} src={hatSriLanka} alt="" />
      <img
        className={imgClass}
        src={nineArchBridge}
        alt=""
      />
      <img
        className={imgClass}
        src={nineArchBridgeElla}
        alt=""
      />
      <img
        className={imgClass}
        src={sriPadaSriLanka}
        alt="hh"
      />
      <img
        className={imgClass}
        src={sunsetPhilippines}
        alt=""
      />
      <img
        className={imgClass}
        src={jardimBotanicoCoimbra}
        alt=""
      />
      <img className={imgClass} src={isleOfWight} alt="" />
    </section>
  );
};

export default AboutGallery;
