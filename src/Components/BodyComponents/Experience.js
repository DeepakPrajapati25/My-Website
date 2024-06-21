import Title from "../Title";

export default function Experience(props) {
  return (
    <div
      ref={props.experienceRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>experience</Title>
      <div>
        <div className="text-color-hover text-lg pb-4">
          Summer Internship at XYZ (May 2025 - July 2025)
        </div>
        <div className="flex py-2 gap-2  flex-col sm:flex-row">
          <div className="text-color-hover">workDone:</div>
          <div>
            <div>
              {" "}
              - Developed and deployed .....{" "}
            </div>{" "}
            <div>
              {" "}
              - The feature was deployed in app, ....
            </div>
          </div>
        </div>
        <div className="flex py-2 gap-2  flex-col sm:flex-row">
          <div className="text-color-hover">techStackUsed:</div>
          <div>Node.Js,React.Js...</div>
        </div>
      </div>
    </div>
  );
}
