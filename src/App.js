import NavBar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useEffect, useRef, useState } from "react";


function App() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const cpRef = useRef(null);
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "dark");

  useEffect(()=>{
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className={`md:text-lg ${mode}`}>
      <div className="bg-base transition-all duration-300 font-ibmMono flex-col  text-center sm:text-left">
        <NavBar
          mode={mode}
          setMode={setMode}
          aboutMeRef={aboutMeRef}
          educationRef={educationRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          achievementsRef={achievementsRef}
          cpRef={cpRef}
        />
        <Body
          aboutMeRef={aboutMeRef}
          educationRef={educationRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          achievementsRef={achievementsRef}
          cpRef={cpRef}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
