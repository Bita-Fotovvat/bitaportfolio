import './Navbar.scss';

export default function Navbar(){
    return(
        <>
        <section>
            <div className='navbar--bar'></div>
            <p>About</p>
        </section>
        <section>
            <div className='navbar--bar'></div>
            <p>Experience</p>
        </section>
        <section>
            <div className='navbar--bar'></div>
            <p>Projects</p>
        </section>
        <section>
            <div className='navbar--bar'></div>
            <p>Interests</p>
        </section>
        </>
    )
}