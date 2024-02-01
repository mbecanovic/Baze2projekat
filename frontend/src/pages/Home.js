import Cards from '../design/kartica/cards.jsx';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  return(
  <div className='homepage'>
  <h1 >Dobrodosli {/*location.state.id*/} na pocetnu stranu</h1>;
  <Cards />
  </div>
  );
}
