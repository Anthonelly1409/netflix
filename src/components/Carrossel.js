import  './Carrossel.css' 
import elite from '../img/elite.jpg'
import Vis from '../img/vis.jpg'
import ST from '../img/ST.jpg'
import SE from '../img/SE.jpg'
import EnolaHolmes from '../img/EnolaHolmes.jpg'
import Bridgerton from '../img/Bridgerton.jpg'
// import Gambito from '../img/gambito.jpg'


function Carrossel(){

    return(
    <div className='container'>
        
        <span className='c-dubladas'>
            Séries estrangeiras dubladas em português
        </span>

        <div className='fotos1'>
            <img className='capas1' src={elite}/>
            <img className='capas1' src={Vis}/>
            <img className='capas1' src={ST}/>
            <img className='capas1' src={SE}/>
            <img className='capas1' src={EnolaHolmes}/>
            <img className='capas1' src={Bridgerton}/>
            {/* <img className='capas1' src={Gambito}/> */}

        </div>
        
    </div>
    );
}

export default Carrossel;