import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Counseling from './pages/Counseling';
import MyNavbar from './components/Navbar';
import DanceToRelax from './pages/DanceToRelax';
import PetSession from './pages/PetSession';
import Meditation from './pages/Meditation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/about' exact element={ <About /> } />
          <Route path='/contact' exact element={ <Contact /> } />
          <Route path='/service' exact element={ <Service /> } />
          <Route path='/Counseling' exact element={ <Counseling /> } />
          <Route path='/dance-to-relax' exact element={ <DanceToRelax /> } />
          <Route path='/pet-sessions' exact element={ <PetSession /> } />
          <Route path='/meditation' exact element={ <Meditation /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
