import { useParams } from "react-router-dom";
import "./Detalhes.css";

import { Md18UpRating } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

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
      titulo: "Teen Wolf",
      descricao:
        "Um jovem misterioso chega a uma pequena cidade e logo desperta a curiosidade dos moradores. Enquanto tenta esconder seu passado sombrio, segredos começam a vir à tona, revelando uma batalha entre instinto e humanidade.",
      ano: 2021,
      temporadas: 3,
      genero: "Drama",
      elenco: "Ator 1, Ator 2",
      avaliacao: 4.5,
      capa: Wolf,
      classificacao: "18+",
      comentarios: [
        {
          id: 1,
          usuario: "LoboFã",
          texto: "Melhor série de lobisomens que já vi!",
        },
      ],
    },
    2: {
      titulo: "Riverdale",
      descricao:
        "Em uma cidade aparentemente tranquila, um grupo de adolescentes enfrenta mistérios sombrios após a morte de um colega. Entre romances, segredos e conspirações, eles descobrem que Riverdale não é tão inocente quanto parece.",
      ano: 2017,
      temporadas: 7,
      genero: "Drama / Mistério",
      elenco: "KJ Apa, Lili Reinhart",
      avaliacao: 4.0,
      capa: Riverdale,
      classificacao: "16+",
      comentarios: [
        {
          id: 1,
          usuario: "VeronicaC",
          texto: "Amo o mistério, mas a história é muito louca.",
        },
      ],
    },
    3: {
      titulo: "Sintonia",
      descricao:
        "A vida de três jovens da periferia de São Paulo se entrelaça entre o crime, a música e a fé. Com escolhas difíceis e a busca por um futuro melhor, eles mostram que a realidade pode ser tão intensa quanto os seus sonhos.",
      ano: 2019,
      temporadas: 4,
      genero: "Drama brasileiro",
      elenco: "Christian Malheiros, MC Jottapê",
      avaliacao: 4.7,
      capa: Sintonia,
      classificacao: "18+",
      comentarios: [
        {
          id: 1,
          usuario: "NandoTchê",
          texto: "A série representa muito bem a quebrada. Perfeita.",
        },
      ],
    },
    4: {
      titulo: "You",
      descricao:
        "Joe Goldberg parece ser apenas um homem apaixonado, mas por trás da sua gentileza se esconde um lado obsessivo e perigoso. Ele é capaz de tudo para conquistar e proteger aqueles que ama – até mesmo matar.",
      ano: 2018,
      temporadas: 4,
      genero: "Suspense psicológico",
      elenco: "Penn Badgley, Victoria Pedretti",
      avaliacao: 4.3,
      capa: You,
      classificacao: "18+",
      comentarios: [
        {
          id: 1,
          usuario: "Usuário123",
          texto:
            "Série incrível! A trama te prende e o vilão é tão cativante que você se pega torcendo por ele. É doentio, mas bom.",
        },
        {
          id: 2,
          usuario: "Maria_Filmes",
          texto: "Gostei da atuação, mas o Joe é MUITO obsessivo. Chega a dar agonia kkkk.",
        },
        {
          id: 3,
          usuario: "Fã_de_YOU",
          texto: "MELHOR SÉRIE DA NETFLIX! Já assisti 3 vezes! #TeamJoe",
        },
        {
          id: 4,
          usuario: "CineCrítico",
          texto:
            "Análise profunda do que é stalking. Bem escrito, mas romantizando o ponto da discussão.",
        },
      ],
    },
    5: {
      titulo: "The Witcher",
      descricao:
        "Geralt de Rívia é um caçador de monstros solitário, que luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes são mais cruéis que as próprias criaturas. Destino, magia e sangue se entrelaçam em sua jornada.",
      ano: 2019,
      temporadas: 3,
      genero: "Fantasia",
      elenco: "Henry Cavill, Anya Chalotra",
      avaliacao: 4.6,
      capa: TheWitcher,
      classificacao: "18+",
      comentarios: [
        {
          id: 1,
          usuario: "Bruxo_Geralt",
          texto: "A série é fiel aos livros, mas a segunda temporada foi fraca.",
        },
      ],
    },
    6: {
      titulo: "Dorama",
      descricao:
        "Em meio a paixões proibidas e dilemas familiares, jovens enfrentam os desafios do amor verdadeiro em um mundo cheio de tradições e escolhas difíceis. Um drama emocionante que mistura romance, cultura e emoção.",
      ano: 2020,
      temporadas: 2,
      genero: "Romance / Drama",
      elenco: "Atores coreanos",
      avaliacao: 4.2,
      capa: Dorama,
      classificacao: "12+",
      comentarios: [
        {
          id: 1,
          usuario: "K-DramaLover",
          texto: "Chorei o final todo, muito bom!",
        },
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${dados.capa})`,
      }}
    >
      <div className="detalhes-info">
        {dados.titulo === "Riverdale" && (
          <div className="netflix-serie">
            <SiNetflix />
            <span>SÉRIE</span>
          </div>
        )}

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

        <p>
          <b>Gênero:</b> {dados.genero}
        </p>
        <p>
          <b>Elenco:</b> {dados.elenco}
        </p>
        <p>{dados.descricao}</p>

        <div className="detalhes-botoes">
          <button className="assistir">▶ Assistir</button>
          <button className="minha-lista">+ Minha Lista</button>
        </div>

        {/* Comentários */}
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

export default Detalhes;
