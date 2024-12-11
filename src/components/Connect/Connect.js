import './Connect.scss';
import GitHubIcon from '../../assets/icons/github-mark.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';
import EmailIcon from '../../assets/icons/email-icon.png';

export default function Connect(){
    return(
        <>
        <div className='connect'>
            <a target="_blank" href="https://github.com/Bita-Fotovvat"><img className='connect--img' src={GitHubIcon} alt="Github Icon" title="Github"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/bita-fotovvat/"><img className='connect--img' src={LinkedinIcon} alt="Linkedin Icon" title="Linkedin"/></a>
            <a target="_blank" href="mailto:bita.fotovvat@gmail.com"><img className='connect--img' src={EmailIcon} alt="Email Icon" title="Email"/></a>
        </div>
        </>
    );
}