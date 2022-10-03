import FlashCard from "./FlashCard"
import cards from "../cards"
import { useState } from "react"
import Pergunta from './Pergunta'

export default function ListaFlashCard({color, activeQuestion, setActiveQuestion, done, setDone}) {

    const [clicado, setClicado] = useState(undefined)

    function cliquei(e, i){
        setActiveQuestion(cards[i])
        setClicado(e)
    }

    return (
        <>
            {
            cards.map((e, i) => !(clicado === e) ?
                <FlashCard click={() => cliquei(e, i)} i={i} />
                :
                <Pergunta pergunta={e.question} resposta={e.answer} />
            )
            }
        </>

    )
}