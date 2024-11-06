import './Connect.scss';
import GitHubIcon from '../../assets/icons/github-mark.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';

export default function Connect(){
    return(
        <>
        <div className='connect--list'>
            <li className='connect--list__item'><image className='connect--img' src={GitHubIcon} alt="Github Icon"/></li>
            <li className='connect--list__item'><image className='connect--img' src={LinkedinIcon} alt="Linkedin Icon"/></li>
            <li className='connect--list__item'>Email</li>
        </div>
        </>
    );
}