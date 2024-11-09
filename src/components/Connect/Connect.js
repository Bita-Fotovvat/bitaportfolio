import './Connect.scss';
import GitHubIcon from '../../assets/icons/github-mark.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';
import EmailIcon from '../../assets/icons/email-icon.png';

export default function Connect(){
    return(
        <>
        <div className='connect'>
            <img className='connect--img' src={GitHubIcon} alt="Github Icon" title="Github"/>
            <img className='connect--img' src={LinkedinIcon} alt="Linkedin Icon" title="Linkedin"/>
            <img className='connect--img' src={EmailIcon} alt="Email Icon" title="Email"/>
        </div>
        </>
    );
}