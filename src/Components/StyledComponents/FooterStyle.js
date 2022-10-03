import styled from "styled-components"

const FooterStyle = styled.div`
background-color: #FFFF;
display: flex;
flex-direction: column;
width: 375px;
justify-content: center;
align-items: center;
margin: 0 auto;
box-shadow: 0px -4px 6px 0px #0000000D;
position: absolute;
top: 595px;

.buttons {
    margin-top: 9px;
    display: flex;
    gap: 8px;
    
    button {
        height: 37.16571807861328px;
        width: 85.17144012451172px;
        border-radius: 5px;
        border: 0;
        color: white;
        :hover{
            cursor: pointer;
        }
    }

    .red{
        background-color: #FF3030;
    }

    .orange{
        background-color: #FF922E;
    }

    .green{
        background-color: #2FBE34;
    }
}

h2{
    font-family: 'Recursive';
    font-size: 18px;
    font-weight: 400;
    text-align: left;

}

`

export default FooterStyle