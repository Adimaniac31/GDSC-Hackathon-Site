import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TitleWithMenu from './components/TitleWithMenu';
import Hero from './components/HeroNew';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <hr/>
        <TitleWithMenu className="TitleWithMenu"/>
        <hr/>
        <Hero />
        <Footer />   
    </div>
  );
}

export default App;
