import logo from '../assets/img/logo.png'
import ListaFlashCard from './ListaFlashCard'
import styled from 'styled-components'
import Cabecalho from "./StyledComponents/Cabecalho.js"
import Rodape from './Rodape'
import { useState } from 'react'

export default function App() {

    const [color, setColor] = useState('')
    const [done, setDone] = useState([])
    const [activeQuestion, setActiveQuestion] = useState(undefined)

    const Top = styled.div`
        background-color: #FB6B6B;
        display: flex;
        flex-direction: column;
        height: 667px;
        width: 375px;
        justify-content: center;
        margin: 0 auto;
        border: 1px solid #DBDBDB;

    `
    
    const Deck = styled.div`
        overflow-y: scroll;
        max-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
    `
    const AllApp = styled.div`
    
        position: relative;
        display: flex;
        justify-content: center;

    
    `

    return (
        <AllApp>
            <Top>
                <Cabecalho>
                    <img src={logo} alt="" />
                    <h1>ZapRecall</h1>
                </Cabecalho>
                <Deck>
                    <ListaFlashCard done={done} setDone={setDone} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} color={color} />
                </Deck>
            </Top>
            <Rodape done={done} setDone={setDone} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} color={color} setColor={setColor} />
        </AllApp>

    )
}