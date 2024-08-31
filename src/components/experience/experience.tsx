import Skill from "../skill/skill";
import Title from "../title/title";
import "./experience.scss";
export default function Experience() {
    const year = new Date().getFullYear();
    const experienceTime = year - 2022
    const descriptionTime = experienceTime + " years"
    return (
        <div className="experience">
            <Title text="Experience" />
            <p>{descriptionTime} working as a Fullstack Developer, in company Lanlink Serviços em Informática.</p>
            <div className="experience-time">
                <Skill image="/react.png" measure={experienceTime} years={descriptionTime} />
                <Skill image="/js.png" measure={experienceTime} years={descriptionTime} />
                <Skill image="/ts.png" measure={experienceTime} years={descriptionTime} />
                <Skill image="/python.png" measure={experienceTime} years={descriptionTime} />
            </div>
        </div>
    )
}