import Title from "../Title"


export default function Education(props) {
    return (
        <div ref={props.educationRef} className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
            <Title>education</Title>
            <div className="flex flex-col sm:flex-row">
                <div className="text-color-hover px-2 text-center md:text-left">degree:</div>
                <div className=" text-center md:text-left">Bachelor of Technology in Computer Science and Engineering from IIT Guwahati. (2022 - present)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-color-hover px-2  text-center md:text-left">keyCoursesUndertaken:</div>
                <div className=" text-center md:text-left">Introduction to Computing, Data Structures and Algorithms (Theory and Lab),Design and Analysis of Algorithms, 
                    Database Management Systems (Theory and Lab), Digital Design, Computer Architecture and Organization, 
                    Number Theory, Game Theory and Economics, Probability Theory and Random Processes
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-color-hover px-2  text-center md:text-left">currentCPI:</div>
                <div className=" text-center md:text-left">8.65/10</div>
            </div>
        </div>
    )
}