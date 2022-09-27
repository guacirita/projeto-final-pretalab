
import styles from './home.module.css'
import homeImg from '../../Assests/itororo.jpg'
import conteudoImg from '../../Assests/home-bikes.jpg'
import bemvindaImg from '../../Assests/bemvinda.jpg'
import paradaImg from '../../Assests/paraciclo.jpg'
import amorImg from '../../Assests/bike-amor.jpg'


function Home(){
    return(  
    <>
    <div className={styles.header}>
        <h1>Mapa Ciclo Amigável</h1>
        <img src={homeImg} alt="bicicletas estacionadas " />
    </div> 
    
    <div className={styles.subtitulo}>
    <p>O Mapeamento Ciclo Amigável é um projeto do Coletivo Señoritas Courier, que tem como objetivo a pesquisa, identificação e criação de um mapa acessível gratuitamente, com pontos considerados Ciclo Amigáveis para quem realiza entregas de bike e demais ciclistas.</p>
    </div>

    <div className={styles.motivos}>
        <section className={styles.content}>
            <div className={styles.cardsContainer}>
                <h2 className={styles.tituloCards}>Por que mapeamos?</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img className={styles.imagemCard} src={conteudoImg} alt="bicicletas encostadas num muro" />
                            <div className={styles.textos}>
                            <h3 className={styles.subtituloCard}>Proposta</h3>
                            <p className={styles.texto}>A proposta é mapear pontos que ofereçam suporte para ciclistas entregadores, permitindo o uso de banheiros, bebedouros, cozinhas comunitárias, 
                            tomadas para recarregar celulares, refeições com valores acessíveis, bicicletários e paraciclos seguros, entre outros serviços, como lojas e bicicletarias.</p>
                            </div>
                    </div>
                        <div className={styles.card}>
                                <img className={styles.imagemCard} src={bemvindaImg}alt="mensagem de bem-vinda para a bike"/>
                                <div className={styles.textos}>
                                <h3 className={styles.subtituloCard}>Motivos</h3>
                                <p className={styles.texto}> É uma forma de auxiliar e devolver o respeito e dignidade para este público, 
                                que realiza trabalho de entrega sem emitir poluição, incentivando o uso de bicicleta como modal sustentável e possível.</p>
                                </div>
                        </div>
                    </div>
                </div>
        </section>
        <section className={styles.content}>
            <div className={styles.cardsContainer}>
                <h2 className={styles.tituloCards}>"Mapear é uma forma de se apropriar do território, identificando pontos de interesse e conectando pessoas"</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img className={styles.imagemCard} src={paradaImg} alt="paraciclo e poemas"/>
                        <div className={styles.textos}>
                        <h3 className={styles.subtituloCard}>Onde?</h3>
                        <p className={styles.texto}>Inicialmente realizado na região central da cidade de São Paulo, a ideia é expandir esta proposta e mapear demais pontos da cidade com a contribuição de ciclistas.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imagemCard} src={amorImg} alt="bike e poema"/>
                        <div className={styles.textos}>
                        <h3 className={styles.subtituloCard}>Colabore</h3>
                        <p className={styles.texto}>Toda pessoa que pedala também pode contribuir com o mapeamento, indicando novos pontos Ciclo Amigáveis e ajudando a remover espaços que não mais recebem ciclistas, seja por terem encerrado suas atividades ou por mudanças na administração.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>   


</>  

  )
}
export default Home
