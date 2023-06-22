import Image from 'next/image'
import "./header.scss"
export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m John 👋</h1>
        <h2>Fullstack developer</h2>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}