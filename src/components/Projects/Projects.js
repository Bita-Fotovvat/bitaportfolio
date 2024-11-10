import './Projects.scss';

export default function Projects(props){
    console.log(props.techstack);
    return(
        <>
        <article className='projects'>
            <h2 className="projects--title">{props.title}</h2>
            <h3 className="projects--subtitle">{props.subtitle}</h3>
            <p className="projects--body">{props.body}</p>
            <img className="projects--projectimage" src={props.image} />
            <ul className='projects--techstack'>
                {props.techstack.map(item=>{
                    return(
                        <li className='projects--techstack__item'>{item}</li>
                    )
                })}
            </ul>
            <h3 className="projects--subtitle">{props.subtitle2}</h3>
            <p className="projects--body">{props.body2}</p>
            <img className="projects--projectimage" src={props.image2} />
            <ul className='projects--techstack'>
            {props.techstack2.map(item=>{
                    return(
                        <li className='projects--techstack__item'>{item}</li>
                    )
                })}
            </ul>
        </article>
        </>
    )
}