// import Footer from '../Footer/Footer'
import bikeImg from '../../Assests/bike-flores.jpg'
import biciImg from '../../Assests/galpao.jpg'
// import pareImg from '../../Assests/bike-mulher.jpg'
import paracicloImg from '../../Assests/estacionadas.jpg'

import styles from './about.module.css'

function About(){
   return(
   <>
    <div className={styles.header}>
      <h1>
         Sobre o projeto
      </h1>
      <img src={biciImg} alt="bicicletas e tabuleiro"/>
    </div>

    <div className={styles.subtitulo}>
    <p>Diariamente as pessoas que fazem entregas se veem em situação de vulnerabilidade: falta banheiro adequado, falta de água para se hidratar corretamente, 
       comida com valores que caibam no bolso, lugar seguro para deixar a bicicleta enquanto acessam portarias, local adequado para esquentar a marmita e se alimentar sem passar por constrangimento.</p>
    </div>

      <div className={styles.conteudo}>
      <section className={styles.content}>
      <div className={styles.cardsContainer}>
            <div className={styles.cards}>
               <div className={styles.card}>
               <p className={styles.textos}>Pensando nisso, o coletivo Señoritas Courier resolveu mapear e compartilhar gratuitamente o mapa Ciclo Amigável, que ficará acessível 
                     na internet para quem entrega e também quem não entrega.</p>
               <img className={styles.imagemCard} src={bikeImg} alt="bicicleta carregando flores"/>
               </div>
            </div>
           
            <div className={styles.cards}>
               <div className={styles.card}>
                     <img className={styles.imagemCard} src={paracicloImg} alt="bicicletas no paraciclo" />
                     <p className={styles.textos}>A ideia é também ajudar a divulgar espaços e pequenos comércios, incentivando mais ciclistas a consumirem nestes espaços, uma vez que eles apoiam quem pedala por uma cidade melhor.</p>
               </div>
            </div>
      </div>
      </section>
      </div>
     
      <div>
         <section className={styles.cardsSenoritas}>
            <div className={styles.cardSenorita}>
            <iframe src="https://www.youtube.com/embed/qEy4AMy9dRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div className={styles.senorita}>       
                     <p className={styles.texto}>O Señoritas Courier é composto por mulheres e pessoas LGBTQIA+ que fazem entregas de bicicleta por toda a cidade de São Paulo. <br />
                     Contando com pessoas periféricas, trans, pretas e imigrantes, que optaram por estar e atuar em coletivo, buscando por condições decentes de trabalho, o coletivo existe desde 2018 e durante a pandemia cresceu e se estabeleceu como 
                     referência de resistência e empoderamento.<br />
                     Embora realizem entregas diariamente, estas pessoas possuem formações diversas em áreas como artes visuais, música, palhaçaria, turismo, ciências do mar, mecânica, tecnologia e assistência social,  o que contribui para o entendimento da diversidade e 
                     complexidade da cidade e quem nela habita.</p>
                  </div>
            </div>
         </section>
      </div>
   
  </>

   )
}

export default About