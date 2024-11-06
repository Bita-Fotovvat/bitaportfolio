import './HomePage.scss';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
import Detail from '../../components/Detail/Detail';

export default function HomePage() {
  const propsData = [
    {
      id:1,
      title: "About",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:2,
      title: "Projects",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:3,
      title: "Experience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
    // const projectDetails = [
    //   {title: "Travel Planner",
    //     description: "",
    //     image: ""
    //   },
    //   {}
    // ];
  const about = propsData[0];
  const projects = propsData[1];
  const experience = propsData[2];

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
            <Detail 
            title={projects.title}
            body={projects.body}
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