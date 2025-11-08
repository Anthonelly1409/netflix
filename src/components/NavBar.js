import './NavBar.css'
import logo from '../img/netflix-logo-transparente.png'
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";

function NavBar() {
    return (
        <div className='barra'>
            <div className='nav-bar'>
                <img className='logotipo' src={logo} alt="Logo" />
                <Link className='link' to={'/home'}>Início</Link>
                <Link className='link' to={'/'}>Filmes</Link>
                <Link className='link' to={'/'}>Bombando</Link>
                <Link className='link' to={'/'}>Minha lista</Link>
                <Link className='link' to={'/'}>Navegar por idiomas</Link>
            </div>

            {/* Botão de Conta agora é um Link */}
            <Link className='conta' to={'/perfil'}>
                <VscAccount />
                <span> Conta </span>
            </Link>
        </div>
    );
}

export default NavBar;
