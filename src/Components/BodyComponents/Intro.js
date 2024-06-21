import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="pb-8 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="text-center sm:text-left">
        <span className="text-color-hover">Hi,</span>
      </div>
      <div className="text-center sm:text-left">
        <span className="text-color-hover">I am</span>
      </div>
      <div>
        <div className="py-6 text-4xl md:text-5xl lg:text-6xl text-color-hover text-center sm:text-left">
          Deepak Prajapati,
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl pb-4 text-center sm:text-left">
          IIT Guwahati CS Undergrad,
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl pb-6 text-center sm:text-left">
          Programmer and Problem Solver
        </div>
        <div className="pb-8 leading-7 text-center sm:text-left">
          I'm a third year B.Tech undergrad pursuing Computer Science and
          Engineering from IIT Guwahati. I'm naturally inclined towards programming
          and problem solving, and am always up for a challenge that enables me to think deep and come up with en efficient solution. I am passionate about writing fast, efficient and clean code.
        </div>
      </div>
      <div className="flex px-4 justify-center sm:justify-start">
        <div>
          <a
            href="https://www.linkedin.com/in//deepak-prajapati-ba2a24262//"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn
              className="transition-all hover:scale-125 hover:text-color-hover  hover:-translate-y-1"
              size="2em"
            />
          </a>
        </div>
        <div className="px-4">
          <a
            href="https://github.com/DeepakPrajapati25"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub
              className="transition-all hover:scale-125 hover:text-color-hover  hover:-translate-y-1"
              size="2em"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
