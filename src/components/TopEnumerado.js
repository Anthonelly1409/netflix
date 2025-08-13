import  './TopEnumerado.css' 
import Noturno from '../img/Noturno.jpg'
import Herois from '../img/Herois.jpg'
import Kittyz from '../img/Kittyzinha.jpg'
import Says from '../img/Says.jpg'
import Squid from '../img/Squid.jpg'
import Perfil from '../img/FalsoPerfil.jpg'
// import Gambito from '../img/gambito.jpg'


function CarrosselHistorias(){

    return(
    <div className='containerrs'>
        
        <span className='n-dubladas'>
            Brasil: top 10 em séries hoje
        </span>

        <div className='fotos4'>
            <img className='capas4' src={Noturno}/>
            <img className='capas4' src={Herois}/>
            <img className='capas4' src={Kittyz}/>
            <img className='capas4' src={Says}/>
            <img className='capas4' src={Squid}/>
            <img className='capas4' src={Perfil}/>
            {/* <img className='capas1' src={Gambito}/> */}

        </div>
        
    </div>
    );
}

export default CarrosselHistorias;