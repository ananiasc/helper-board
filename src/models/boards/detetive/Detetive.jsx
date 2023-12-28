import './Detetive.css'
// peões
import pAmarelo from '/peoes/p-amarelo.png'
import pBranco from '/peoes/p-branco.png'
import pMarrom from '/peoes/p-marrom.png'
import pAzul from '/peoes/p-azul.png'
import pRosa from '/peoes/p-rosa.png'
import pVermelho from '/peoes/p-vermelho.png'
import pPreto from '/peoes/p-preto.png'
import pVerde from '/peoes/p-verde.png'
// armas
import espingarda from '/armas/espingarda.png'
import pa from '/armas/pa.png'
import peDeCabra from '/armas/pe-de-cabra.png'
import tesoura from '/armas/tesoura.png'
import quimica from '/armas/quimica.png'
import veneno from '/armas/veneno.png'
import socoIngles from '/armas/soco-ingles.png'
import faca from '/armas/faca.png'
// locais
import prefeitura from '/locais/prefeitura.png'
import restaurante from '/locais/restaurante.png'
import floricultura from '/locais/floricultura.png'
import boate from '/locais/boate.png'
import hospital from '/locais/hospital.png'
import mansao from '/locais/mansao.png'
import cemiterio from '/locais/cemiterio.png'
import praca from '/locais/praca.png'
import hotel from '/locais/hotel.png'
import banco from '/locais/banco.png'
import estacaoDeTrem from '/locais/estacao-de-trem.png'

function Detetive() {
  return (
    <>
      <h1>Detetive</h1>
      <fieldset className='fieldsets'>
        <legend>Suspeitos</legend>
        <div className='suspeitos'>
          <span>Sargento</span>
          <span>Bigode</span>
          <img className='imagens' src={pAmarelo} alt='Contém imagem de um peão semelhante ao de xadrez na cor amarela'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Florista</span>
          <span>Dona Branca</span>
          <img className='imagens' src={pBranco} alt='Contém imagem de um peão semelhante ao de xadrez na cor branca'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Chef de cozinha</span>
          <span>Tony Gourmet</span>
          <img className='imagens' src={pMarrom} alt='Contém imagem de um peão semelhante ao de xadrez na cor marrom'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Mordomo</span>
          <span>James</span>
          <img className='imagens' src={pAzul} alt='Contém imagem de um peão semelhante ao de xadrez na cor azul'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Médica</span>
          <span>Dona Violeta</span>
          <img className='imagens' src={pRosa} alt='Contém imagem de um peão semelhante ao de xadrez na cor rosa'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Dançarina</span>
          <span>Srta. Rosa</span>
          <img className='imagens' src={pVermelho} alt='Contém imagem de um peão semelhante ao de xadrez na cor vermelha'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Coveiro</span>
          <span>Sérgio Soturno</span>
          <img className='imagens' src={pPreto} alt='Contém imagem de um peão semelhante ao de xadrez na cor preta'/>
          <input type="checkbox"/>
        </div>
        <div className='suspeitos'>
          <span>Advogado</span>
          <span>Sr. Marinho</span>
          <img className='imagens' src={pVerde} alt='Contém imagem de um peão semelhante ao de xadrez na cor verde'/>
          <input type="checkbox"/>
        </div>
      </fieldset>
      <fieldset className='fieldsets'>
        <legend>Armas</legend>
        <div className='armas'>
          <span>Espingarda</span>
          <img className='imagens' src={espingarda} alt='Contém imagem de uma espingarda usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Pá</span>
          <img className='imagens' src={pa} alt='Contém imagem de uma pá usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Pé de Cabra</span>
          <img className='imagens' src={peDeCabra} alt='Contém imagem de um pé de cabra usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Tesoura</span>
          <img className='imagens' src={tesoura} alt='Contém imagem de uma tesoura usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Arma Química</span>
          <img className='imagens' src={quimica} alt='Contém imagem de uma arma química usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Veneno</span>
          <img className='imagens' src={veneno} alt='Contém imagem de um veneno usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Soco Inglês</span>
          <img className='imagens' src={socoIngles} alt='Contém imagem de um soco inglês usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
        <div className='armas'>
          <span>Faca</span>
          <img className='imagens' src={faca} alt='Contém imagem de uma faca usada como arma no jogo Detetive'/>
          <input type="checkbox"/>
        </div>
      </fieldset>
      <fieldset className='fieldsets'>
        <legend>Locais</legend>
        <div className='locais'>
          <span>Prefeitura</span>
          <img className='imagens' src={prefeitura} alt='Contém imagem que representa uma Prefeitura'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Restaurante</span>
          <img className='imagens' src={restaurante} alt='Contém imagem que representa um Restaurante'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Floricultura</span>
          <img className='imagens' src={floricultura} alt='Contém imagem que representa uma Floricultura'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Boate</span>
          <img className='imagens' src={boate} alt='Contém imagem que representa uma Boate'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Hospital</span>
          <img className='imagens' src={hospital} alt='Contém imagem que representa um Hospital'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Mansão</span>
          <img className='imagens' src={mansao} alt='Contém imagem que representa uma Mansão'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Cemitério</span>
          <img className='imagens' src={cemiterio} alt='Contém imagem que representa uma Cemitério'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Praça</span>
          <img className='imagens' src={praca} alt='Contém imagem que representa uma Praça'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Hotel</span>
          <img className='imagens' src={hotel} alt='Contém imagem que representa um Hotel'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Banco</span>
          <img className='imagens' src={banco} alt='Contém imagem que representa um Banco'/>
          <input type="checkbox"/>
        </div>
        <div className='locais'>
          <span>Estação de Trem</span>
          <img className='imagens' src={estacaoDeTrem} alt='Contém imagem que representa uma Estação de Trem'/>
          <input type="checkbox"/>
        </div>
      </fieldset>
    </>
  )
}

export default Detetive
