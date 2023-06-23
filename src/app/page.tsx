import Experience from '@/components/experience/experience'
import Header from '@/components/header/header'
import EmailIcon from '@/components/icons/email-icon'
import Infos from '@/components/infos/infos'
import SocialBtns from '@/components/social-btns/social-btns'
import "../styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Infos />
      <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:j.williamd.a.m@outlook.com">
            contact me
            <EmailIcon/>
          </a>
        </div>
    </main >
  )
}
