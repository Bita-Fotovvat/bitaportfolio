import './Detail.scss';
export default function Detail(props){
    
    return(
        <article className="detail">
            <h2 className="detail--title">{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p className="detail--body">{props.body}</p>
            <image src={props.image}/>
        </article>
    )
}