import Intro from "./BodyComponents/Intro"
import AboutMe from "./BodyComponents/AboutMe"
import Education from "./BodyComponents/Education"
import Experience from "./BodyComponents/Experience"
import Cp from "./BodyComponents/Cp"
import Projects from "./BodyComponents/Projects/Projects"
import Achievements from "./BodyComponents/Achievements"

export default function Body(props) {
    return (
        <div className="w-full flex-col justify-start pt-20 md:pt-40 px-4 lg:px-32 text-color-base">
            <Intro />
            <AboutMe aboutMeRef={props.aboutMeRef} />
            <Education educationRef={props.educationRef} />
            <Projects projectsRef={props.projectsRef} />
            {/* <Experience experienceRef={props.experienceRef} /> */}
            <Achievements achievementsRef={props.achievementsRef} />
            <Cp cpRef={props.cpRef} />
        </div>
    )
}