import Skill from "../skill/skill";
import Title from "../title/title";
import "./experience.scss";
export default function Experience() {
    return (
        <div className="experience">
            <Title text="Experience" />
            <p>1 year working as a Fullstack Developer, in company Lanlink Serviços em Informática.</p>
            <div className="experience-time">
                <Skill image="/react.png" measure={1} years="1 year" />
                <Skill image="/js.png" measure={1} years="1 year" />
                <Skill image="/ts.png" measure={1} years="1 year" />
                {/* <Skill image="./python.png" measure={1} years="1 year" /> */}
            </div>
        </div>
    )
}