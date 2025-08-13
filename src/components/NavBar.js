import './NavBar.css'
import logo from '../img/netflix-logo-transparente.png'
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";



function NavBar( ){


    return (

        <div className='barra'>
            <div className='nav-bar'>
            <img className='logotipo' src={logo} />
            <Link className='link' to={'/home'}>Início</Link>
            <Link className='link' to={'/'}>Filmes</Link>
            <Link className='link' to={'/'}>Bombando</Link>
            <Link className='link' to={'/'}>Minha lista</Link>
            <Link className='link' to={'/'}>Navegar por idiomas</Link>
            

        </div>

       <div className='conta'>
        <VscAccount />
        <span> Conta </span>

        </div>
            
        </div >
        
        
   
    );
}

export default NavBar;