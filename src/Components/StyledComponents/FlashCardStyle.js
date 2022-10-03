import styled from "styled-components";

const FlashCardStyle = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  

  img {
    height: 23px;
  }

  h2 {
    font-family: 'Recursive', cursive;
    font-size: 16px;
  }
`
export default FlashCardStyle