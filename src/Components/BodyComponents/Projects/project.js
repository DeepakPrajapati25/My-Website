import { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

export const Project = ({ title, body, className, bodyId, link }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };
  const firstRef = useRef(null);

  const bodyComponent = document.getElementById(bodyId);

  const componentHeight = showContent
    ? bodyComponent?.clientHeight
      ? bodyComponent.clientHeight + 40
      : 0
    : 0;

  const componentHeightString = componentHeight.toString() + "px";

  return (
    <div>
      <div className="flex gap-2 align-middle cursor-pointer">
        <div
          className="flex items-center text-color-hover"
          onClick={toggleShowContent}
        >
          <div
            className={`${
              showContent && "rotate-45 text-color-rotating-plus"
            } transition-all duration-400 ease-linear`}
          >
            <BsPlusLg />
          </div>
        </div>
        <div
          className="underline underline-offset-2"
          onClick={toggleShowContent}
        >
          {title}
        </div>
        <div
          className="flex items-center text-color-hover"
        >
          <div
            className={`hover:text-color-rotating-plus transition-all duration-400 ease-linear`}
          >
            <a href={link} rel="noopener noreferrer" target="_blank">
            <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`px-6 ${
          showContent ? "py-4 bg-nav" : "bg-transparent text-transparent"
        }  transition-all duration-400 ease-linear`}
        style={{
          height: componentHeightString,
          transition: "height 0.15s ease-linear",
        }}
        ref={firstRef}
      >
        {body}
      </div>
    </div>
  );
};
