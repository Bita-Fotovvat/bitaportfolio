import './Detail.scss';
export default function Detail(props){
    console.log(props);
    
    return(
        <article className="detail">
            <h2 className="detail--title">{props.title}</h2>
            <p className="detail--body">{props.body}</p>
        </article>
    )
}