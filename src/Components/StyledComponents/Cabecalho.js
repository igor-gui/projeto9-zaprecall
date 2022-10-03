import styled from "styled-components"


const Cabecalho = styled.header`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    font-weight: 400;
    color: white;
    z-index: 1;
    background-color: var(--cor-fundo);
    margin-top: 42px;

    h1 {
    font-size: 36px;
    font-weight: 400;
    color: white;
    font-family: "Righteous";
    }
  `

export default Cabecalho