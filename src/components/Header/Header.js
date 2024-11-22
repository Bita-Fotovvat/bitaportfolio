import "./Header.scss"

export default function Header(){
    return(
        <div className="header">
            <ul className="header--container">
                <li className="header--item">Home</li>
                <li className="header--item">About</li>
                <li className="header--item">Projects</li>
                <li className="header--item">Experiences</li>
            </ul>
        </div>
    );
}