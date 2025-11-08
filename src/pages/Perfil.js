import "./Perfil.css";
import IconFlix from "../img/IconFlix.png";
import { GoGear } from "react-icons/go";
import { FaTv, FaClock, FaHeart, FaTrophy, FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Imagens da playlist
import ST from "../img/Stranger.png";
import Wolf from "../img/TeenWolf.jpg";
import You from "../img/Youu.jpg";
import TheWitcher from "../img/Witcher.jpg";

// Imagens das recomendações
import Arcane from "../img/Arcane.png";
import BkBad from "../img/BkBad.png";
import Dark from "../img/Dark.webp";

// GIFs correspondentes
import SThingsGif from "../img/SThings.gif";
import TWolfGif from "../img/TWolf.gif";
import YuGif from "../img/Yu.gif";
import TWitcherGif from "../img/TWitcher.gif";
import DkGif from "../img/DK.gif";
import BkGif from "../img/Bk.gif";
import JinxGif from "../img/Jinx.gif";

function Perfil() {
  const navigate = useNavigate();

  // Lista de séries assistidas
  const playlist = [
    { id: 1, nome: "Stranger Things", img: ST, gif: SThingsGif },
    { id: 2, nome: "Teen Wolf", img: Wolf, gif: TWolfGif },
    { id: 3, nome: "You", img: You, gif: YuGif },
    { id: 4, nome: "The Witcher", img: TheWitcher, gif: TWitcherGif },
  ];

  // Recomendações locais
  const recomendacoes = [
    { id: 5, nome: "Dark", img: Dark, gif: DkGif },
    { id: 6, nome: "Breaking Bad", img: BkBad, gif: BkGif },
    { id: 7, nome: "Arcane", img: Arcane, gif: JinxGif },
  ];

  return (
    <div className="perfil-container">
      {/* Cabeçalho */}
      <div className="perfil-header">
        <div className="perfil-info">
          <img src={IconFlix} alt="Foto do Usuário" className="perfil-avatar" />
          <div>
            <h2 className="perfil-nome">Usuário Netflix</h2>

            {/* Nível e progresso */}
            <p className="perfil-detalhes">
              <span className="nivel-titulo">Nível:</span>{" "}
              <strong>Cinéfilo</strong> 🟥
              <span className="serie-count"> • 24 séries assistidas</span>
            </p>
            <div className="perfil-progresso">
              <div
                className="perfil-progresso-barra"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="perfil-progresso-texto">75% para o próximo nível 🎯</p>

            {/* Bio detalhada */}
            <p className="perfil-bio">
              🎬 Apaixonado por séries de mistério, fantasia e ação.  
              Maratonando desde 2016 e sempre pronto para descobrir a próxima obra-prima.  
              “Assistir uma boa série é viver várias vidas em uma só.”
            </p>

            {/* Última atividade */}
            <p className="perfil-atividade">
              <FaFire className="fire-icon" /> Última maratona:{" "}
              <strong>“You” - Temporada 4</strong>
            </p>

            {/* Conquistas */}
            <div className="perfil-badges">
              <div className="badge">
                <FaTrophy className="badge-icon ouro" />
                <span>Top 1 Semana</span>
              </div>
              <div className="badge">
                <FaHeart className="badge-icon vermelho" />
                <span>Favoritou 50 séries</span>
              </div>
              <div className="badge">
                <FaClock className="badge-icon cinza" />
                <span>+150h assistidas</span>
              </div>
            </div>
          </div>
        </div>
        <GoGear
              className="icone-config"
              title="Editar perfil"
              onClick={() => navigate("/editar-perfil")}
            />
      </div>

      {/* Estatísticas */}
      <div className="perfil-stats">
        <div className="stat">
          <FaTv className="stat-icon" />
          <p>
            <strong>24</strong>
            <br />
            Séries assistidas
          </p>
        </div>
        <div className="stat">
          <FaClock className="stat-icon" />
          <p>
            <strong>182h</strong>
            <br />
            Tempo total
          </p>
        </div>
        <div className="stat">
          <FaHeart className="stat-icon" />
          <p>
            <strong>Suspense</strong>
            <br />
            Gênero favorito
          </p>
        </div>
      </div>

      {/* Playlist */}
      <div className="playlist">
        <h3>🎞️ Minha Playlist</h3>
        <div className="playlist-grid">
          {playlist.map((serie) => (
            <div
              key={serie.id}
              className="playlist-card"
              onClick={() => navigate("/detalhes")}
            >
              <img
                src={serie.img}
                alt={serie.nome}
                onMouseEnter={(e) =>
                  (e.currentTarget.src = serie.gif || serie.img)
                }
                onMouseLeave={(e) => (e.currentTarget.src = serie.img)}
              />
              <span>{serie.nome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendações */}
      <div className="recomendacoes">
        <h3>🔥 Recomendado para você</h3>
        <div className="playlist-grid">
          {recomendacoes.map((serie) => (
            <div key={serie.id} className="playlist-card">
              <img
                src={serie.img}
                alt={serie.nome}
                onMouseEnter={(e) =>
                  (e.currentTarget.src = serie.gif || serie.img)
                }
                onMouseLeave={(e) => (e.currentTarget.src = serie.img)}
              />
              <span>{serie.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
