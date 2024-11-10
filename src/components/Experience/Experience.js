import './Experience.scss';

export default function Experience({ title, experiences }) {
    return (
        <>
            <article className='experiences'>
                <h2 className="experiences--title">{title}</h2>
                {experiences && experiences.map((experience, index) => (
                    <div key={experience.id || index}>
                        <h3 className="experiences--subtitle">{experience.title}</h3>
                        <div className="experiences--subheadingcontainer">
                            <h3 className="experiences--company">{experience.company}</h3>
                            <p className="experiences--timeframe">{experience.timeFrame}</p>
                        </div>
                        <p className="experiences--description">{experience.description}</p>
                        <ul className='experiences--techstack' >
                            {experience.techStack && experience.techStack.map((tech, i) => (
                                <li className='experiences--techstack__item' key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </>
    );
}
