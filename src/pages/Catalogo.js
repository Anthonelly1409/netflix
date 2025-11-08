import { Link } from "react-router-dom";
import Insatiable from "../img/insatiable.jpg";
import DeVoltaAos15 from "../img/deVoltaAos15.jpg";
import Lucifer from "../img/lucifer.jpg";
import LoveAlarm from "../img/loveAlarm.jpg";
import Greys from "../img/greys.jpg";
import "./Catalogo.css";

function Catalogo() {
  const series = [
    { id: 1, capa: Insatiable, titulo: "Insatiable" },
    { id: 2, capa: DeVoltaAos15, titulo: "De Volta aos 15" },
    { id: 3, capa: Lucifer, titulo: "Lucifer" },
    { id: 4, capa: LoveAlarm, titulo: "Love Alarm" },
    { id: 5, capa: Greys, titulo: "Grey’s Anatomy" },
  ];

  return (
    <div className="catalogo">
      <h1>Descubra suas próximas histórias</h1>
      <div className="lista-series">
        {series.map((serie) => (
          <Link key={serie.id} to={`/detalhes/${serie.id}`} className="card">
            <img src={serie.capa} alt={serie.titulo} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
