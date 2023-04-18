import './App.css';
import NavBar from './components/Animations/NavBar';
import HeroSection from './components/HeroSection';
import Manifesto from './components/Manifesto';

import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <HeroSection/>
      <Manifesto/>
      <Footer/>

      
    

    </div>
  );
}

export default App;
