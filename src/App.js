import './App.css';
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js'
import Cards from './Components/Cards.js'
import Tabelle from './Components/Tabelle.js'
import Footer from './Components/Footer.js'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";


function App() {
  return (
   <>
        <Navbar />
        <Hero />
        <Cards />
        <Tabelle />

</>









   
  );
}

export default App;
