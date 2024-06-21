import myImage from "../../profile.jpg";
import Title from "../Title";
export default function AboutMe(props) {
  return (
    <div
      ref={props.aboutMeRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>aboutMe</Title>
      <div className="flex flex-col 2xl:flex-row justify-center align-middle items-center ">
        <div
          className="flex p-10 lg:px-0 pt-0 2xl:p-0
        w-full 2xl:w-3/4
        align-center justify-center"
        >
          <img src={myImage} alt="Deepak Prajapati" />
        </div>
        <div className="px-10 leading-7">
          <div className="">
            Hello there! I'm currently in the third year of my B.Tech degree
            focused in Computer Science and Engineering from IIT Guwahati. I
            love to take on complex tasks and challenges, and to devise
            efficient solutions in code to solve them. I have developed a deep
            understanding of Computer Science fundamentals including 
            Data Structures and Algorithms, Design and Analysis of Algorithms, Database Management Systems, Computer Architecure and Organization etc. 
            I am proficient in C,C++ and JavaScript programming
            languages, and various web technologies including Node.js,Express.js React.js,
            Tailwind, etc.
          </div>
          <div>
            In my free time, I love to play games, and give competitive
            programming contests.
          </div>
        </div>
      </div>
    </div>
  );
}
