// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Navbar/Nav'
import Header from './Components/Header/Header'
import Home from './pages/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Facilities from './Components/Facilities/Facilities';
import Rooms from './Components/Rooms/Rooms';
import Testimonials from './Components/Testimonials/Testimonial';
import Rooms2 from './pages/Rooms';
import Testimonials2 from './pages/Testimonials';
import Restaurant from './pages/Restaurant';

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";


  return (
    <>
      <Nav />
      {isHome && <Header />}
      <About />
      <Services />
      <Rooms />
      <Facilities />
      <Testimonials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/habitaciones" element={<Rooms2 />} />
        <Route path="/restaurante" element={<Restaurant />} />
        <Route path="/testimonios" element={<Testimonials />} />
      </Routes>
      
    </>
  );
}

export default App;
