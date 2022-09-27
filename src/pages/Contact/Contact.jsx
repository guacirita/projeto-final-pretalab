import { useState} from 'react'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, push } from "firebase/database"

import styles from './contact.module.css'
import contatoImg from '../../Assests/bike-mulher.jpg'

const firebaseConfig = {
    apiKey: "AIzaSyCOjgc1et2auEBsFvkVyuauotzl1YPTdY0",
    authDomain: "projeto-final-pretalab-f8dea.firebaseapp.com",
    projectId: "projeto-final-pretalab-f8dea",
    storageBucket: "projeto-final-pretalab-f8dea.appspot.com",
    messagingSenderId: "210442831616",
    appId: "1:210442831616:web:ce56b4c4f84be1f07355e5",
    databaseURL: "https://projeto-final-pretalab-f8dea-default-rtdb.firebaseio.com"
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)


function Contact(){
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [mensagem, setMensagem] = useState('')

function handleInputValueNome(event){
    setNome(event.target.value)
}

function handleInputValueEmail(event){
    setEmail(event.target.value)
}

function handleInputValueMensagem(event){
    setMensagem(event.target.value)
}

function handleCreateMensagem(event){
    event.preventDefault()

    const mensagensListRef = ref(database, 'mensagens')
    const novaMensagemRef = push(mensagensListRef)

    set(novaMensagemRef, {
        texto: mensagem, 
        email: email,
        nome: nome
    })

    setMensagem('')
    setNome('')
    setEmail('')
}   


    return(
        <>
        <div className={styles.header}>
        <img src={contatoImg} alt="grafite de mulher negra pedalando" />
        <h2>Deseja indicar um lugar ciclo amigável ou fazer alguma sugestão? Utilize o espaço abaixo.</h2>
        </div>
    
        <div className={styles.formContainer}>
            <form onSubmit={handleCreateMensagem} className={styles.form}>
                <input onChange={handleInputValueNome} 
                className={styles.formInput} 
                placeholder="Digite seu nome" 
                value={nome}
                />
                <input onChange={handleInputValueEmail} 
                className={styles.formInput} 
                placeholder="Digite seu e-mail" 
                value={email}
                />
                <textarea onChange={handleInputValueMensagem} 
                className={styles.formTextArea} 
                placeholder="Digite sua mensagem"
                value={mensagem}
                />
                <button className={styles.formButton}>enviar mensagem</button>
            </form>
        </div>
        </>
    )
}

export default Contact