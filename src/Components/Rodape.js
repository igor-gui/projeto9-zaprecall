import FooterStyle from "./StyledComponents/FooterStyle"
import cards from "../cards"

export default function Rodape({activeQuestion, setActiveQuestion, color, setColor, done, setDone}) {
    
    function feito(cor){
        const card = {
            question: activeQuestion.question,
            answer: activeQuestion.answer,
            cor: cor
        }

        setActiveQuestion(card)
        
        setDone([...done, activeQuestion])
    }

    return (
        <FooterStyle>
            <div className='buttons'>
                <button onClick={() => feito('#FF3030')} className='red'>Não lembrei</button>
                <button onClick={() => feito('#FF922E')} className='orange'>Quase não lembrei</button>
                <button onClick={() => feito('#2FBE34')} className='green'>Zap!</button>
            </div>
            <h2>0/{(cards.length)} CONCLUÍDOS</h2>
        </FooterStyle>
    )
}