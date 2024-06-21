import clsx from "clsx";
export default function NavElement(props) {
  return (
    <div className="p-4">
      <div
        onClick={props.onClick}
        className={clsx(
          "transition-all duration-400 hover:text-color-hover hover:cursor-pointer",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
