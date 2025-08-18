import { useParams } from "react-router-dom";
import "./Detalhes.css";

import Wolf from "../img/Wolf.jpg";
import Riverdale from "../img/Riverdale.jpg";
import Sintonia from "../img/Sintonia.jpg";
import You from "../img/You.jpg";
import TheWitcher from "../img/TheWitcher.jpg";
import Dorama from "../img/Dorama.jpg";

function Detalhes() {
  const { id } = useParams();

  const series = {
    1: {
      titulo: "Wolf",
      descricao: "Descrição da série Wolf...",
      ano: 2021,
      genero: "Drama",
      elenco: "Ator 1, Ator 2",
      capa: Wolf,
    },
    2: {
      titulo: "Riverdale",
      descricao: "Descrição da série Riverdale...",
      ano: 2017,
      genero: "Drama / Mistério",
      elenco: "KJ Apa, Lili Reinhart",
      capa: Riverdale,
    },
    3: {
      titulo: "Sintonia",
      descricao: "Descrição da série Sintonia...",
      ano: 2019,
      genero: "Drama brasileiro",
      elenco: "Christian Malheiros, MC Jottapê",
      capa: Sintonia,
    },
    4: {
      titulo: "You",
      descricao: "Descrição da série You...",
      ano: 2018,
      genero: "Suspense psicológico",
      elenco: "Penn Badgley, Victoria Pedretti",
      capa: You,
    },
    5: {
      titulo: "The Witcher",
      descricao: "Descrição da série The Witcher...",
      ano: 2019,
      genero: "Fantasia",
      elenco: "Henry Cavill, Anya Chalotra",
      capa: TheWitcher,
    },
    6: {
      titulo: "Dorama",
      descricao: "Descrição do Dorama...",
      ano: 2020,
      genero: "Romance / Drama",
      elenco: "Atores coreanos",
      capa: Dorama,
    },
  };

  const dados = series[id];

  if (!dados) return <h1 style={{ color: "white" }}>Série não encontrada</h1>;

  return (
    <div className="detalhes">
      <div className="detalhes-capa">
        <img src={dados.capa} alt={dados.titulo} />
      </div>
      <div className="detalhes-info">
        <h1>{dados.titulo}</h1>
        <p><b>Ano:</b> {dados.ano}</p>
        <p><b>Gênero:</b> {dados.genero}</p>
        <p><b>Elenco:</b> {dados.elenco}</p>
        <p>{dados.descricao}</p>
        <div className="detalhes-botoes">
          <button className="assistir">▶ Assistir</button>
          <button className="minha-lista">+ Minha Lista</button>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
