import './App.css';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import ContactUs from './contact_us/contact_us';
import FarmToFork from './farm_to_fork/farm_to_fork';
import Header from './header/header';
import Intro from './intro/intro';
import Testimonials from './testimonials/testimonials';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="layout">
        <Header />
        <Intro />
        <FarmToFork />
        <ContactUs />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
