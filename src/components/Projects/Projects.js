import './Projects.scss';
import arrowIconStatic from '../../assets/icons/arrowIconStatic.png';
import arrowIconAnimated from '../../assets/icons/arrowIconAnimated.gif';

export default function Projects({title, projects}){
    return(
        <>
        <article className='projects'>
            <h2 className="projects--title">{title}</h2>
            {projects.map((project, index) => (
                <div key={project.id || index} className="project">
                    <div className='projects--titlecontainer'>
                        <h3 className="projects--subtitle">{project.title}</h3>
                        <img className="projects--arrowicon" src={arrowIconStatic} alt='arrow icon' />
                    </div>
                    <p className="projects--body">{project.body}</p>
                    <img className="projects--projectimage" src={project.image} alt={project.title} />
                    <ul className='projects--techstack'>
                        {project.techstack.map((item, i) => (
                            <li key={i} className='projects--techstack__item'>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </article>
        </>
    )
}