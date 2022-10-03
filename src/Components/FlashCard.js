import playoutline from '../assets/img/play-outline-icon.svg'
import FlashCardStyle from './StyledComponents/FlashCardStyle'

export default function FlashCard({click, pergunta, resposta, i }) {

    



    return (
        <FlashCardStyle onClick={click}>
            <h2>Pergunta {i + 1}</h2>
            <img src={playoutline} alt='' />
        </FlashCardStyle>
    )
}