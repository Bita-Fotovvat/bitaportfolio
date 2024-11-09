import './HomePage.scss';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
import Detail from '../../components/Detail/Detail';
import Projects from '../../components/Projects/Projects';
import TravelPlannerImage from "../../assets/project-images/travelplanner.jpg";
import XeusHomeImage from "../../assets/project-images/xeushome.png";

export default function HomePage() {
  const detailData = [
    {
      id: (Math.random)*1000,
      title: "About",
      body: "As a former polymer engineer turned software developer, I have embraced a new career path driven by my passion for building impactful, user-friendly solutions. My focus is now on creating intuitive, user-centric tools that streamline tasks and enhance everyday experiences. By combining my problem-solving mindset and technical skills, I aim to deliver valuable products while doing what I love."
    },
    {
      id: (Math.random)*1000,
      title: "Experience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

   const projectsData = [
    "Projects",
    {
      id: (Math.random)*1000,
      title: "Travel Planner",
      body: "Travel Planner is a website designed to simplify the trip planning process. It enables users to gather information and create personalized travel itineraries.",
      image : TravelPlannerImage
      },
      {
      id: (Math.random)*1000,
      title: "Xeus Home Website",
      body: "The Xeus Home website showcases a renovation company, providing an engaging platform to introduce its services and connect effectively with its audience.",
      image : XeusHomeImage
      }
   ]

  const about = detailData[0];
  const experience = detailData[1];

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

            subtitle={projectsData[1].title}
            body={projectsData[1].body}
            image={projectsData[1].image}

            subtitle2={projectsData[2].title}
            body2={projectsData[2].body}
            image2={projectsData[2].image}
            />
            <Detail 
            title={experience.title}
            body={experience.body}
            />
          </section>
        </div>
      </div>
    );
  }