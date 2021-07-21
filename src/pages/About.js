import { HashLink } from "react-router-hash-link";
import myself from "../assets/myself.jpg"
import {ReactComponent as ArrowdownSvg} from "../assets/arrowdown.svg"
import Button from "../components/Button";

const About = () => {
  return (
    <main
      className={`container  
      hero-height pt-4 md:gap-12 md:pt-0 md:grid md:grid-cols-2`}
    >
      <div className='h-1/2 md:h-full flex flex-col items-start justify-center gap-6'>
        <h2 className="text-4xl font-bold md:text-5xl text-center md:text-left">Hi! Glad you're here.</h2>
        <p className="text-xl xl:text-3xl text-center md:text-left">Please scroll down so you can 
          read more about myself or download my CV for a quick TLDR.
       </p>
        <Button text="Download CV" extraClasses="m-0"/>
      </div>
      <img className='md:h-3/4 h-1/2 md:p-0 p-6 self-center mx-auto w-full object-cover object-top' src={myself} alt="" />
    </main>
  );
};

export default About;
