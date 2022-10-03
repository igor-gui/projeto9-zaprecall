import logo from '../assets/img/logo.png'
import ListaFlashCard from './ListaFlashCard'
import styled from 'styled-components'
import Cabecalho from "./StyledComponents/Cabecalho.js"
import Rodape from './Rodape'

export default function App() {

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


    return (
        <>
            <Top>
                <Cabecalho>
                    <img src={logo} alt="" />
                    <h1>ZapRecall</h1>
                </Cabecalho>
                <Deck>
                    <ListaFlashCard />
                </Deck>
            </Top>
            <Rodape />
        </>

    )
}