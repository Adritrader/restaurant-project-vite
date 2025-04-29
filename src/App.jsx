// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Navbar/Nav'
import Header from './Components/Header/Header'
import Home from './pages/Home';
import About from './Components/About/About';
import Rooms from './pages/Rooms';
import Testimonials from './pages/Testimonials';
import Restaurant from './pages/Restaurant';

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";


  return (
    <>
      <Nav />
      {isHome && <Header />}
      <About />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/restaurante" element={<Restaurant />} />
        <Route path="/testimonios" element={<Testimonials />} />
      </Routes>
      
    </>
  );
}

export default App;
