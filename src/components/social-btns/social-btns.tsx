import { GitHubIcon } from "../icons/github-icon"
import { InstaIcon } from "../icons/insta-icon"
import { LinkedInIcon } from "../icons/linkedin-icon"
import "./social-btns.scss"
export default function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/johnwilli_am/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/john-william-de-araujo-mesquita/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/johnwilliamam" target="_blank">
                <GitHubIcon/>
            </a>
            {/* <a href="">
                <TwitterIcon/>
            </a> */}
        </div>
    )
}