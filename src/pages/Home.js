import './Home.css'
import NavBar from '../components/NavBar'
import NomeSerie from '../components/NomeSerie'
import Carrossel from '../components/Carrossel';
import CarrosselSeries from '../components/CarroselSeries';
import CarrosselHistorias from '../components/CarrosselHistorias';
import TopEnumerado from '../components/TopEnumerado'

// ------------------
function Home(){

    return(
        <div className='tela'>
            <NavBar />
            <NomeSerie />
          <Carrossel />
          <CarrosselSeries />
          <CarrosselHistorias />
          <TopEnumerado />
        </div>

    );
    
}

// ------------------
export default Home;