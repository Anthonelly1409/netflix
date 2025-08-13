import  './CarrosselSeries.css' 
import Wolf from '../img/Wolf.jpg'
import Riverdale from '../img/Riverdale.jpg'
import Sintonia from '../img/Sintonia.jpg'
import You from '../img/You.jpg'
import TheWitcher from '../img/TheWitcher.jpg'
import Dorama from '../img/Dorama.jpg'
// import Gambito from '../img/gambito.jpg'


function CarrosselSeries(){

    return(
    <div className='containers'>
        
        <span className='series'>
            Comédia
        </span>

        <div className='fotos2'>
            <img className='capas2' src={Wolf}/>
            <img className='capas2' src={Riverdale}/>
            <img className='capas2' src={Sintonia}/>
            <img className='capas2' src={You}/>
            <img className='capas2' src={TheWitcher}/>
            <img className='capas2' src={Dorama}/>
            {/* <img className='capas1' src={Gambito}/> */}

        </div>
        
    </div>
    );
}

export default CarrosselSeries;