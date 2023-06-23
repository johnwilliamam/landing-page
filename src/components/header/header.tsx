import Image from 'next/image'
import "./header.scss"
export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m John! 👋</h1>
        <h2>Fullstack developer</h2>
      </div>
      <Image
        src="/me.jpg"
        alt="Perfil"
        width={384}
        height={300}
        priority
      />
    </div>
  )
}