
import styles from './home.module.css'
import homeImg from '../../Assests/home-bikes.jpg'

function Home(){
    return(    
    <div className={styles.header}>
        <h1>Mapa Cicloamigável</h1>
        <img src={homeImg} alt="bicicletas estacionadas num dia ensolarado" />
    </div>
    )
}
export default Home