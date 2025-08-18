import './CarrosselSeries.css';
import { Link } from 'react-router-dom'; // importa Link para navegar

import Wolf from '../img/Wolf.jpg';
import Riverdale from '../img/Riverdale.jpg';
import Sintonia from '../img/Sintonia.jpg';
import You from '../img/You.jpg';
import TheWitcher from '../img/TheWitcher.jpg';
import Dorama from '../img/Dorama.jpg';

function CarrosselSeries() {
  const series = [
    { id: 1, titulo: "Wolf", capa: Wolf },
    { id: 2, titulo: "Riverdale", capa: Riverdale },
    { id: 3, titulo: "Sintonia", capa: Sintonia },
    { id: 4, titulo: "You", capa: You },
    { id: 5, titulo: "The Witcher", capa: TheWitcher },
    { id: 6, titulo: "Dorama", capa: Dorama },
  ];

  return (
    <div className='containers'>
      <span className='series'>
        Comédia
      </span>

      <div className='fotos2'>
        {series.map(serie => (
          <Link key={serie.id} to={`/detalhes/${serie.id}`}>
            <img className='capas2' src={serie.capa} alt={serie.titulo} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CarrosselSeries;
