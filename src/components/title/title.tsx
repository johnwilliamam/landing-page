import "./title.scss";
interface Title {
    text: string;
}
export default function Title({ text }: Title) {
    return (
        <h3 className="section-title">{text}</h3>
    )
}