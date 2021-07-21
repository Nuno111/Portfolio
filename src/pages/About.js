import { HashLink } from "react-router-hash-link";
import myself from "../assets/myself.jpg"
import {ReactComponent as ArrowdownSvg} from "../assets/arrowdown.svg"

const About = () => {
  return (
    <main
      className={`container  
      hero-height pt-4`}
    >
      <div className='h-1/2 flex flex-col items-center justify-center gap-6'>
        <h2 className="text-4xl font-bold md:text-5xl text-center">Hi! Glad you're here.</h2>
        <p className="text-xl xl:text-3xl text-center">Please scroll down so you can 
          read about myself separated in three different sections.
       </p>
                  <HashLink
            smooth
            to="/#about"
            aria-label="Scroll down to about section"
          >
            <ArrowdownSvg
              className={`inline w-12 h-12
            dark:text-darkTxtPrimary text-lightTxtPrimary fill-current 
            transform hover:scale-125 duration-500`}
            />
          </HashLink>

      </div>
      <img className=' h-1/2 p-6 mx-auto w-full object-cover object-top' src={myself} alt="" />
    </main>
  );
};

export default About;
