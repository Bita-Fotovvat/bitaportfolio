import './Detail.scss';
export default function Detail(props){
    console.log(props);
    
    return(
        <article className="detail">
            <h2 className="detail--title">{props.title}</h2>
            <p className="detail--body">{props.body}</p>
            <h3 className="detail--subtitle">{props.project1title}</h3>
            <p className="detail--body">{props.project1body}</p>
            <img className="detail--projectimage" src={props.project1image} />
            <h3 className="detail--subtitle">{props.project2title}</h3>
            <p className="detail--body">{props.project2body}</p>
            <img className="detail--projectimage" src={props.project2image} />
        </article>
    )
}