import  './CarrosselHistorias.css' 
import Insatiable from '../img/Insatiable.jpg'
import DeVolta from '../img/DeVolta.jpg'
import Lucifer from '../img/lucifer.jpg'
import Love from '../img/Love.jpg'
import Greys from '../img/Greys.jpg'
import Papel from '../img/papel.jpg'
// import Gambito from '../img/gambito.jpg'


function CarrosselHistorias(){

    return(
    <div className='containerss'>
        
        <span className='s-dubladas'>
            Descubra suas próximas histórias
        </span>

        <div className='fotos3'>
            <img className='capas3' src={Insatiable}/>
            <img className='capas3' src={DeVolta}/>
            <img className='capas3' src={Lucifer}/>
            <img className='capas3' src={Love}/>
            <img className='capas3' src={Greys}/>
            <img className='capas3' src={Papel}/>
            {/* <img className='capas1' src={Gambito}/> */}

        </div>
        
    </div>
    );
}

export default CarrosselHistorias;