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
      <img className={imgClass} src={porto} alt="hh" />
      <img className={imgClass} src={madeira} alt="" />
    </section>
  );
};

export default AboutGallery;
