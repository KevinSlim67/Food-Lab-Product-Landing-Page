import './App.css';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import Header from './header/header';
import Intro from './intro/intro';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="layout">
        <Header />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
