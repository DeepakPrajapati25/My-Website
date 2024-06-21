import Title from "../../Title";
import { Project } from "./project";
import "../../../App.css";

export default function Projects(props) {
  return (
    <div
      ref={props.projectsRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>projects</Title>
      <Project
        title={
          "PeerPulse (Gold medal in Inter Hostel Technical Competition-Kriti’24)"
        }
        link="https://github.com/PranavNair01/Lohit_Kriti_Software_Dev_24/"
        body={
          <div id="PeerPulse">
            <div>
              - Facilitating project collaboration, networking, and adding course review functionality.
            </div>
            <div>
              - Features include real-time updates, discussion forums, project rating, search using TechStack and group chat.
            </div>
            <div>
              - Built with React JS, Node JS, MongoDB , and integration of OpenAI for enhanced functionality.
            </div>
          </div>
        }
        bodyId="PeerPulse"
      />
      <Project
        title={"NSS Website for IITG"}
        link="https://github.com/BrajeshMuwel17/NSS-website"
        body={
          <div id="NSS">
            <div>
              - Developed a website for the NSS to share information, manage volunteers, announcements and resource sharing..
            </div>
            <div>
              - Features include login functionality for NSS heads to create posts and add team member information.
            </div>
            <div>
              - Built with ReactJS, Tailwind CSS, Node.js, and MongoDB for Database.
            </div>
          </div>
        }
        className={"h-60 sm:h-56 md:h-48 lg:h-42 xl:h-24  pt-4"}
        bodyId="NSS"
      />
      <Project
        title={"PathOptimizer (Personal Project)"}
        link="https://github.com/DeepakPrajapati25/PathOptimizer"
        body={
          <div id="PathOptimizer">
            <div>
              - Developed a web mapping platform to display the shortest path between two places in IIT Guwahati.
            </div>
            <div>
              - Implemented Dijkstra's algorithm on a campus map represented as a weighted-undirected graph to optimize routes,
              resulting in an average of 95 meters less and the travel duration got reduced up to 12%.
            </div>
            <div>
              - Utilized Flask for backend server and modeled a Python-based API to send data to frontend upon API calls.
            </div>
          </div>
        }
        bodyId="PathOptimizer"
      />
    </div>
  );
}
