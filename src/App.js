import './App.css';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import Header from './header/header';
import Intro from './intro/intro';

function App() {
  return (
    <div className="layout">
      <NavBar />
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
