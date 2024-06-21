import Title from "../Title";
import { SiCodeforces, SiCodechef } from "react-icons/si"

export default function Cp(props) {
    return (
        <div ref={props.cpRef} className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
            <Title>competitiveProgamming</Title>
            <div>
                I give competitive programming contests in my free time. I'm an <span className="text-color-hover">Expert</span> on Codeforces, <span className="text-color-hover">4 star rated coder</span> on CodeChef and <span className="text-color-hover">Green</span> on Atcoder.
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start  gap-4 leading-8">
                <div className="align-baseline">My Handles:</div>
                <div className="flex justify-center">
                <div><a href="https://codeforces.com/profile/DeepakPrajapati" rel="noopener noreferrer" target="_blank">
                    <SiCodeforces className="transition-all ease-linear hover:scale-125 hover:text-color-hover hover:-translate-y-1" size="2em" />
                </a></div>
                <div className="px-4"><a href="https://www.codechef.com/users/Chaawal25" rel="noopener noreferrer" target="_blank">
                    <SiCodechef className="transition-all ease-linear hover:scale-125 hover:text-color-hover hover:-translate-y-1" size="2em"  />
                </a></div>
                
                </div>
            </div>
        </div>
    )
}