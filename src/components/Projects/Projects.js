import './Projects.scss';

export default function Projects(props){
    return(
        <>
        <article className='detail'>
            <h2 className="detail--title">{props.title}</h2>
            <h3 className="detail--subtitle">{props.subtitle}</h3>
            <p className="detail--body">{props.body}</p>
            <img className="detail--projectimage" src={props.image} />
            <h3 className="detail--subtitle">{props.subtitle2}</h3>
            <p className="detail--body">{props.body2}</p>
            <img className="detail--projectimage" src={props.image2} />
        </article>
        </>
    )
}