import Image from "next/image"
import Title from "../title/title"
import "./info.scss"
export default function Infos() {
    return (
        <div className="infos">
            <Title text="Languages"/>
            <div className="languages-info">
                <span><Image 
                src={'/united-states.png'}
                width={15}
                height={15}
                alt={"US"}
                /> EN - Basic/Intermediate</span>
                <span><Image 
                src={'/brazil.png'}
                width={15}
                height={15}
                alt={"BR"}
                /> PT-BR - Native Speaker</span>
            </div>
            <div className="educational-info">
                <span>🎓</span>
                <span>Systems Analysis and Development Technologist - Centro Universitário Estácio de Sá</span>
            </div>
        </div>
    )
}