import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';

export default function HomePage() {
    return (
      <div className="home">
        <Header/>
        <Intro/>
        <Navbar/>
        <Connect/>
      </div>
    );
  }