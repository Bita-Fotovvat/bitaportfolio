import './Projects.scss';
import arrowIconStatic from '../../assets/icons/arrowIconStatic.png';

export default function Projects({title, projects}){
    console.log(projects);
    return(
        <>
        <article className='projects'>
            <h2 className="projects--title">{title}</h2>
            {projects.map((project, index) => (
                <div key={project.id || index} className="project">
                    <div className='projects--titlecontainer'>
                        <a 
                        className="projects--link" 
                        target="_blank" 
                        href={project.link}
                        >
                            <h3 className="projects--subtitle">
                                {project.title}
                            </h3>
                        </a>
                        <img className="projects--arrowicon" src={arrowIconStatic} alt='arrow icon' />
                    </div>
                    <p className="projects--body">{project.body}</p>
                    <a 
                    className="projects--link" 
                    target="_blank" 
                    href={project.link}
                    >
                        <img className="projects--projectimage" src={project.image} alt={project.title} />
                    </a>
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