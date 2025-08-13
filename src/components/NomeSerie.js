import './NomeSerie.css'
import { SiNetflix } from "react-icons/si";
import Classificacao from '../img/classificacao.png'
import { IoVolumeHighSharp } from "react-icons/io5";




function NomeSerie(){
    return (

        
        
        <div className='nome-serie'>

        

                <div className='icones'>
                    <SiNetflix className='icone'/>

                    <span className='icon'>
                        S E R I E S
                    </span>
                </div>

            <span className='titulo'>
                D A H M E R
            </span>
            <span className='subtitulo'>
                MONSTER: THE JEFFREY DAHMER STORY 
            </span>

            <div className="SubBotoes">
            <IoVolumeHighSharp className='volume'/>
            <div className="barra"> | </div> {/* Barrinha separadora */}
                <img className="idade" src={Classificacao} />
               
            </div>

            <div className="botoes">
                <button className='botao-assistir'>▶ Assistir</button>
                <button className='botao-info'> Mais informações</button>
            </div>

        </div>
            
    );
}

export default NomeSerie;