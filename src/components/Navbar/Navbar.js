import './Navbar.scss';
import {useState} from 'react';
export default function Navbar(){
    const [activeNavItem, setActiveNavItem] = useState(false);
    const navItems = [
        {id:1, value:"About"}, 
        {id:2, value:"Experience"}, 
        {id:3, value:"Projects"}
    ];
    function handleClick(e){
        setActiveNavItem(!activeNavItem);
    }

    return(
        <>
        <ul className="navbar">
            {navItems.map((item)=>{
                return(<li key={item.id}>{item.value}</li>)
            })}
        </ul>
        </>
    )
}