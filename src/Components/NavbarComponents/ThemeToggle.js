import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ThemeToggle(props) {
	const [light, setLight] = useState(true);
	useEffect(() => {
		if (props.mode === "light") setLight(true);
		else setLight(false);
	}, [props.mode]);

	const changeMode = () => {
		if (props.mode === 'light') props.setMode('dark');
		else props.setMode('light');
	}

	return (
		<div onClick={changeMode} className={`cursor-pointer bg-toggle flex items-center justify-center p-1 m-1 h-3/4 rounded-full gap-1 text-color-toggle-icon`}>
			<BsFillCircleFill className={`absolute transition-all duration-200 ${light ? "-translate-x-2.5" : "translate-x-2.5"}`} />
			<MdLightMode />
			<MdDarkMode />
		</div>
	);
}
