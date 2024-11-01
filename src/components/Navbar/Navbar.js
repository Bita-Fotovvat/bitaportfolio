import './Navbar.scss';
import {useState} from 'react';
export default function Navbar(){
    const [activeNavItem, setActiveNavItem] = useState(1);
    const navItems = [
        {id:1, value:"About"},
        {id:2, value:"Experience"},
        {id:3, value:"Projects"}
    ];
    function handleClick(index){
        setActiveNavItem(index);
    }

    return(
        <>
        <ul className="navbar">
            {navItems.map((item)=>{
                return(
                <section className='navbar--item__container'>
                    <div className={`navbar--item__line ${activeNavItem === item.id ? "active--line" : ""}`} ></div>
                    <li 
                        key={item.id} 
                        className={`navbar--item__title ${activeNavItem === item.id ? "active" : ""}`} 
                        onClick={()=>{handleClick(item.id)}}
                        >
                        {item.value}
                    </li>
                </section>
  )
            })}
        </ul>
        </>
    )
}