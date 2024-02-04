import Cards from '../design/kartica/cards.jsx';
import React from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import Navbar from "../design/navbar/Navbar.js"

export default function Home() {
  return(
  <div className='homepage'>
  <Navbar />

  <h1 >Dobrodosli {/*location.state.username*/} na pocetnu stranu</h1>;

  <Cards />
  </div>
  );
}
