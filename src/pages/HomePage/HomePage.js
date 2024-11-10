import './HomePage.scss';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
import Detail from '../../components/Detail/Detail';
import Projects from '../../components/Projects/Projects';
import TravelPlannerImage from "../../assets/project-images/travelplanner.jpg";
import XeusHomeImage from "../../assets/project-images/xeushome.png";
import Experience from '../../components/Experience/Experience';

export default function HomePage() {
  const detailData = [
    {
      id: (Math.random)*1000,
      title: "About",
      body: "As a former polymer engineer turned software developer, I have embraced a new career path driven by my passion for building impactful, user-friendly solutions. My focus is now on creating intuitive, user-centric tools that streamline tasks and enhance everyday experiences. By combining my problem-solving mindset and technical skills, I aim to deliver valuable products while doing what I love."
    },
    // {
    //   id: (Math.random)*1000,
    //   title: "Experience",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // }
  ];

   const projectsData = [
    "Projects",
    {
      id: Math.random()*1000,
      title: "Travel Planner",
      body: "Travel Planner is a website designed to simplify the trip planning process. It enables users to gather information and create personalized travel itineraries.",
      image : TravelPlannerImage,
      techstack : ["JavaScript","React","HTML", "CSS", "Node.JS", "MySQL"]
      },
      {
      id: Math.random()*1000,
      title: "Xeus Home Website",
      body: "The Xeus Home website showcases a renovation company, providing an engaging platform to introduce its services and connect effectively with its audience.",
      image : XeusHomeImage,
      techstack : ["JavaScript","React","HTML", "CSS"]
      }
   ]

  const about = detailData[0];

  const experiencesData = [
    {
      timeFrame : "JUN 2024 -SEP 2024",
      title : "Software Developer",
      company : "makeitMVP",
      description: "Worked with the UI team to engineer and improve major features and eveloped front end architecture, while contributing to backend development",
      techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Sass"]
    },
    {
      timeFrame : "AUG 2021 -DEC 2023",
      title : "Front-End Developer",
      company : "Unitedreams",
      description: "Collaborated with cross-functional teams and	developed scalable, responsive user interfaces using React.js and CSS while adhering to design patterns and UX principles.",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      timeFrame : "APR 2020 -AUG 2021",
      title : "Front-End Developer",
      company : "Ako Pouyaye Pars",
      description: "Developed front-end solutions that improved user experience and performance, implementing features with modern web technologies.",
      techStack: ["HTML", "CSS", "Sass", "JS"]
    }
  ]

  return (
      <div className="home">
        <div className="container">
          <section className="home--leftside">
            <Intro/>
            <Navbar/>
            <Connect/>
          </section>
          <section className="home--rightside">
            <Detail 
            title={about.title}
            body={about.body}
            />
            <Projects 
            title={projectsData[0]}
            projects={projectsData.slice(1)}
            />
            <Experience 
            title={experiencesData[0].title}
            timeFrame={experiencesData[0].timeFrame}
            company={experiencesData[0].company}
            description={experiencesData[0].description}
            techStack={experiencesData[0].techStack}
            />
          </section>
        </div>
      </div>
    );
  }