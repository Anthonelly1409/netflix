import { useParams } from "react-router-dom";
import { Md18UpRating } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import Insatiable from "../img/Insatiable.jpg";
import DeVolta from "../img/DeVolta.jpg";
import Lucifer from "../img/lucifer.jpg";
import Love from "../img/Love.jpg";
import Greys from "../img/Greys.jpg";
import Papel from "../img/papel.jpg";

import "./DetalhesCatalogo.css";

function DetalhesCatalogo() {
  const { id } = useParams();

  const series = {
    1: {
      titulo: "Insatiable",
      descricao:
        "Uma adolescente que sofria bullying decide se vingar após uma reviravolta em sua vida. Entre concursos de beleza e intrigas, ela descobre o preço da obsessão.",
      ano: 2018,
      temporadas: 2,
      genero: "Comédia / Drama",
      elenco: "Debby Ryan, Dallas Roberts",
      avaliacao: 4.0,
      capa: Insatiable,
      classificacao: "16+",
      comentarios: [
        { id: 1, usuario: "FãSeries", texto: "História diferente, me prendeu bastante!" },
      ],
    },
    2: {
      titulo: "De Volta aos 15",
      descricao:
        "Anita, aos 30 anos, descobre uma forma de voltar para seus 15 e tentar mudar o futuro. Mas cada decisão traz consequências inesperadas.",
      ano: 2022,
      temporadas: 2,
      genero: "Comédia / Drama brasileiro",
      elenco: "Maisa Silva, Camila Queiroz",
      avaliacao: 4.3,
      capa: DeVolta,
      classificacao: "12+",
      comentarios: [
        { id: 1, usuario: "AnitaFã", texto: "Muito nostálgico e divertido, adorei!" },
      ],
    },
    3: {
      titulo: "Lucifer",
      descricao:
        "Entediado no inferno, Lúcifer resolve tirar férias em Los Angeles, onde abre uma boate e passa a ajudar a polícia a resolver crimes.",
      ano: 2016,
      temporadas: 6,
      genero: "Fantasia / Policial",
      elenco: "Tom Ellis, Lauren German",
      avaliacao: 4.7,
      capa: Lucifer,
      classificacao: "18+",
      comentarios: [
        { id: 1, usuario: "DiaboFã", texto: "Tom Ellis é perfeito nesse papel!" },
      ],
    },
    4: {
      titulo: "Love Alarm",
      descricao:
        "Um aplicativo de celular que avisa quando alguém apaixonado por você está por perto transforma a vida de jovens em um turbilhão de sentimentos.",
      ano: 2019,
      temporadas: 2,
      genero: "Romance / Drama",
      elenco: "Kim So-hyun, Song Kang",
      avaliacao: 4.2,
      capa: Love,
      classificacao: "12+",
      comentarios: [
        { id: 1, usuario: "KDramaLover", texto: "Romântico e emocionante até o fim!" },
      ],
    },
    5: {
      titulo: "Grey’s Anatomy",
      descricao:
        "Um grupo de jovens médicos enfrenta desafios pessoais e profissionais dentro e fora de um hospital movimentado.",
      ano: 2005,
      temporadas: 19,
      genero: "Drama Médico",
      elenco: "Ellen Pompeo, Patrick Dempsey",
      avaliacao: 4.8,
      capa: Greys,
      classificacao: "16+",
      comentarios: [
        { id: 1, usuario: "MedFan", texto: "Um clássico, impossível não maratonar!" },
      ],
    },
    6: {
      titulo: "La Casa de Papel",
      descricao:
        "O Professor recruta oito criminosos para realizar o maior assalto da história: invadir a Casa da Moeda da Espanha.",
      ano: 2017,
      temporadas: 5,
      genero: "Ação / Suspense",
      elenco: "Álvaro Morte, Úrsula Corberó",
      avaliacao: 4.9,
      capa: Papel,
      classificacao: "18+",
      comentarios: [
        { id: 1, usuario: "BellaCiao", texto: "Melhor série de assalto da Netflix!" },
      ],
    },
  };

  const dados = series[id];

  if (!dados) {
    return <h1 style={{ color: "white", padding: "20px" }}>Série não encontrada</h1>;
  }

  const renderStars = (nota) => {
    const stars = [];
    const fullStars = Math.floor(nota);
    const hasHalfStar = nota % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star-full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star-half">★</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={`empty-${stars.length}`} className="star-empty">★</span>);
    }
    return stars;
  };

  return (
    <div
      className="detalhes"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${dados.capa})`,
      }}
    >
      <div className="detalhes-info">
        <h1>{dados.titulo}</h1>

        <p className="avaliacao">
          <span className="estrelas">{renderStars(dados.avaliacao)}</span>
          <span className="ano">{dados.ano}</span>
          <span className="temporadas">{dados.temporadas} Temporadas</span>
          <span className="classificacao">
            {dados.classificacao === "18+" && (
              <Md18UpRating size={32} color="red" />
            )}
          </span>
        </p>

        <p><b>Gênero:</b> {dados.genero}</p>
        <p><b>Elenco:</b> {dados.elenco}</p>
        <p>{dados.descricao}</p>

        <div className="detalhes-botoes">
          <button className="assistir">▶ Assistir</button>
          <button className="minha-lista">+ Minha Lista</button>
        </div>

        <div className="comentarios-secao">
          <h2>Comentários</h2>
          <div className="lista-comentarios">
            {dados.comentarios.map((comentario) => (
              <div key={comentario.id} className="comentario-item">
                <FaUserCircle size={40} color="#888" />
                <div className="comentario-conteudo">
                  <div className="comentario-cabecalho">
                    <span className="nome-usuario">{comentario.usuario}</span>
                    <button className="responder">Responder</button>
                  </div>
                  <p>{comentario.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="form-comentario">
            <input type="text" placeholder="Escreva um comentário..." />
            <button className="enviar-comentario">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesCatalogo;
