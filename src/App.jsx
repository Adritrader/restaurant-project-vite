// App.jsx
import { useLocation } from 'react-router-dom';
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header'
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Facilities from './Components/Facilities/Facilities';
import Rooms from './Components/Rooms/Rooms';
import Testimonials from './Components/Testimonials/Testimonial';
import MenuRestaurant from './Components/menuRestaurant/menuRestaurant';



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
      <MenuRestaurant />
      <Footer />
      
    </>
  );
}

export default App;
