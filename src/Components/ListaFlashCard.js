import FlashCard from "./FlashCard"
import cards from "../cards"
import { useState } from "react"
import styled from 'styled-components'
import setinha from '../assets/img/setinha.png'

export default function ListaFlashCard() {

    const [clicado, setClicado] = useState(undefined)

    function Pergunta({ pergunta , resposta }) {

        const [showQuestion, setShowQuestion] = useState(true)

        const Question = styled.div`
        min-height: 131px;
        min-width: 299px;
        height: 131px;
        width: 299px;
        border-radius: 5px;
        background-color: #FFFFD4;
        position: relative;
        align-self: left;
        margin-bottom: 25px;

        h2{
            margin-top: 18px;
            margin-left: 15px;
            font-family: 'Recursive';
            font-size: 15px;
            font-weight: 400;
            text-align: left;
        }
        img {
            height: 20px;
            position: absolute;
            bottom: 6px;
            right: 15px;
            :hover{
                cursor: pointer;
            }
        }
    
    `

        const Answer = styled.div`
        min-height: 131px;
        min-width: 299px;
        height: 131px;
        width: 299px;
        border-radius: 5px;
        background-color: #FFFFD4;
        position: relative;
        align-self: left;
        margin-bottom: 25px;

        h2{
            margin-top: 18px;
            margin-left: 15px;
            font-family: 'Recursive';
            font-size: 15px;
            font-weight: 400;
            text-align: left;
        }
    
    `

        return (
            <>
                {showQuestion ?
                    <Question>
                        <h2>{pergunta}</h2>
                        <img onClick={ () => setShowQuestion(!showQuestion) } src={setinha} alt='' />
                    </Question>

                    :

                    <Answer>
                        <h2>{resposta}</h2>
                    </Answer>
                }
            </>

        )
    }


    return (
        <>
            {cards.map((e, i) => !(clicado === e) ?
                <FlashCard click={() => setClicado(e)} i={i} />
                :
                <Pergunta pergunta={e.question} resposta={e.answer} />
            )}
        </>

    )
}