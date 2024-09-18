import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/about' exact element={ <About /> } />
          <Route path='/contact' exact element={ <Contact /> } />
          <Route path='/service' exact element={ <Service /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
