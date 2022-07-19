import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 32px;
  height: 58px;
  background: #FFFFFF;
  border: none;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  &:hover{
    background: #455CEC;
  }
`;

const NAV_ITEMS = [
  {
    text: 'All',
    imgPath: 'All',
    width: '120px',
  },
  {
    text: 'Android',
    imgPath: 'Android',
    width: '164px',
  },
  {
    text: 'Ios',
    imgPath: 'Ios',
    width: '128px',
  },
  {
    text: 'Embedded',
    imgPath: 'Embedded',
    width: '184px',
  },
  {
    text: 'Front-end',
    imgPath: 'FrontEnd',
    width: '180px',
  },
  {
    text: 'Back-end',
    imgPath: 'BackEnd',
    width: '180px',
  },
]

const Navigation = () => {
  return(
    <Container>{NAV_ITEMS.map(({text, imgPath, width}) => {
      return (
        <Button key={text} style={{ width: width}}>
          <div>
            <img src={require('../../images/icon/' + imgPath + '.svg')} alt={text}/>
          </div>
          <div>{text}</div>
        </Button>
      )})}
    </Container>
  )
}

export default Navigation;