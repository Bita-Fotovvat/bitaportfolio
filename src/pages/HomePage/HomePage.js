import './HomePage.scss';
import { useRef } from 'react';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
import Detail from '../../components/Detail/Detail';
import Projects from '../../components/Projects/Projects';
import TravelPlannerImage from "../../assets/project-images/travelplanner.jpg";
import XeusHomeImage from "../../assets/project-images/xeushome.png";
import Experience from '../../components/Experience/Experience';

export default function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const detailData = [
    {
      id: (Math.random)*1000,
      title: "About",
      body: "As a former polymer engineer turned software developer, I have embraced a new career path driven by my passion for building impactful, user-friendly solutions. My focus is now on creating intuitive, user-centric tools that streamline tasks and enhance everyday experiences. By combining my problem-solving mindset and technical skills, I aim to deliver valuable products while doing what I love."
    },
  ];

   const projectsData = [
    "Projects",
    {
      id: Math.random()*1000,
      title: "Travel Planner",
      body: "Travel Planner is a website designed to simplify the trip planning process. It enables users to gather information and create personalized travel itineraries.",
      image : TravelPlannerImage,
      techstack : ["JavaScript","React","HTML", "CSS", "Node.JS", "MySQL"],
      link : "https://github.com/Bita-Fotovvat/bita-fotovvat-travelplanner"
      },
      {
      id: Math.random()*1000,
      title: "Xeus Home Website",
      body: "The Xeus Home website showcases a renovation company, providing an engaging platform to introduce its services and connect effectively with its audience.",
      image : XeusHomeImage,
      techstack : ["JavaScript","React","HTML", "CSS"],
      link : "https://xeushome.ca"
      }
   ]

  const about = detailData[0];

  const experiencesData = [
    "Experiences",
    {
      id: Math.random()*1000,
      timeFrame : "JUN 2024 -SEP 2024",
      title : "Software Developer",
      company : "makeitMVP",
      description: "Worked with the UI team to engineer and improve major features and eveloped front end architecture, while contributing to backend development",
      techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Sass"]
    },
    {
      id: Math.random()*1000,
      timeFrame : "AUG 2021 -DEC 2023",
      title : "Front-End Developer",
      company : "Unitedreams",
      description: "Collaborated with cross-functional teams and	developed scalable, responsive user interfaces using React.js and CSS while adhering to design patterns and UX principles.",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: Math.random()*1000,
      timeFrame : "APR 2020 -AUG 2021",
      title : "Front-End Developer",
      company : "Ako Pouyaye Pars",
      description: "Developed front-end solutions that improved user experience and performance, implementing features with modern web technologies.",
      techStack: ["HTML", "CSS", "Sass", "JS"]
    }
  ]

  return (
      <div className="home">
        <div className="home--container">
          <section className="home--leftside">
            <Intro/>
            <Navbar
            onNavItemClick={(id) => {
              if (id === 1) scrollToSection(aboutRef);
              else if (id === 2) scrollToSection(projectsRef);
              else if (id === 3) scrollToSection(experiencesRef);
            }}
            />
            <Connect/>
          </section>
          <section className="home--rightside">
            <div ref={aboutRef}>
              <Detail title={about.title} body={about.body} />
            </div>
            <div ref={projectsRef}>
              <Projects title={projectsData[0]} projects={projectsData.slice(1)} />
            </div>
            <div ref={experiencesRef}>
              <Experience title={experiencesData[0]} experiences={experiencesData.slice(1)} />
            </div>
          </section>
        </div>
      </div>
    );
  }