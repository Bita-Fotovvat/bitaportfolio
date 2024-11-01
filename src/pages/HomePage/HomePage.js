import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';

export default function HomePage() {
    return (
      <div className="home">
        <section className="home--leftbar">
          <Intro/>
          <Navbar/>
          <Connect/>
        </section>
        <section className="home--rightbar">
          
        </section>
      </div>
    );
  }