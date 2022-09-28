
import se from '../List/dados'
import belavista from '../List/belavista'
import perdizes from '../List/perdizes'
import republica from '../List/republica'
import mooca from '../List/mooca'
import liberdade from '../List/liberdade'
import listaImg from '../../Assests/mensagem.jpg'
import styles from './lista.module.css'

function Lista() {

    return (
        <>
            <div className={styles.header}>
                <h1>Veja onde sua bicicleta é bem-vinda!</h1>
                <img src={listaImg} alt="casa com mensagem grafitada" />
            </div>
            <div className={styles.flexboxContainer}>
                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>Sé</h1>
                    <ul className={styles.listas}>
                        {se.map(se => {
                            return (
                                <p className={styles.listaItem}
                                    key={se.id}>
                                    <b> {se.nome}</b> <br />
                                    {se.endereço} - {se.bairro}<br />
                                    {se.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>Bela Vista</h1>
                    <ul className={styles.listas}>
                        {belavista.map(belavista => {
                            return (
                                <p className={styles.listaItem}
                                    key={belavista.id}>
                                    <b> {belavista.nome}</b> <br />
                                    {belavista.endereço} - {belavista.bairro}<br />
                                    {belavista.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>Perdizes <br /> Barra Funda</h1>
                    <ul className={styles.listas}>
                        {perdizes.map(perdizes => {
                            return (
                                <p className={styles.listaItem}
                                    key={perdizes.id}>
                                    <b> {perdizes.nome}</b> <br />
                                    {perdizes.endereço} - {perdizes.bairro}<br />
                                    {perdizes.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>


                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>República <br /> Consolação <br /> Bom Retiro</h1>
                    <ul className={styles.listas}>
                        {republica.map(republica => {
                            return (
                                <p className={styles.listaItem}
                                    key={republica.id}>
                                    <b> {republica.nome}</b> <br />
                                    {republica.endereço} - {republica.bairro}<br />
                                    {republica.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>Mooca <br /> Brás <br /> Pari</h1>
                    <ul className={styles.listas}>
                        {mooca.map(mooca => {
                            return (
                                <p className={styles.listaItem}
                                    key={mooca.id}>
                                    <b> {mooca.nome}</b> <br />
                                    {mooca.endereço} - {mooca.bairro}<br />
                                    {mooca.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.fleboxItem}>
                    <h1 className={styles.subtitulo}>Liberdade <br /> Cambuci</h1>
                    <ul className={styles.listas}>
                        {liberdade.map(liberdade => {
                            return (
                                <p className={styles.listaItem}
                                    key={liberdade.id}>
                                    <b> {liberdade.nome}</b> <br />
                                    {liberdade.endereço} - {liberdade.bairro}<br />
                                    {liberdade.utilidade}<br />
                                </p>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Lista







