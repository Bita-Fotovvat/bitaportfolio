import './Navbar.scss';
import { useState } from 'react';
export default function Navbar({ onNavItemClick }){
    const [activeNavItem, setActiveNavItem] = useState(1);
    const navItems = [
        {id:1, value:"About"},
        {id:2, value:"Projects"},
        {id:3, value:"Experience"}
    ];
    function handleClick(id){
        setActiveNavItem(id);
        onNavItemClick(id);
    }

    return(
        <>
        <ul className="navbar">
            {navItems.map((item) => (
                <section className="navbar--item__container" key={item.id}>
                    <div
                    className={`navbar--item__line ${
                    activeNavItem === item.id ? "active--line" : ""
                    }`}
                    ></div>
                    <li
                    className={`navbar--item__title ${
                    activeNavItem === item.id ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                    >
                    {item.value}
                    </li>
                </section>
            ))}
        </ul>
        </>
    )
}