import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TitleWithMenu from './components/TitleWithMenu';
import Hero from './components/Hero';
import HeroNew from './components/HeroNew';

function App() {
  return (
    <div className="App">
        <NavBar />
        <hr/>
        <TitleWithMenu className="TitleWithMenu"/>
        <hr/>
        <HeroNew />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />
        <NavBar />     
    </div>
  );
}

export default App;
