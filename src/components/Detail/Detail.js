import './Detail.scss';
export default function Detail(props){
    
    return(
        <>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.body}</p>
        <image src={props.image}/>
        </>
    )
}