import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const Button = styled.button`
  z-index: 100;
  cursor: pointer;
  margin-left: 32px;
  height: 58px;
  background: ${(props) => (props.now ?'#455CEC' : 'white')};
  border: none;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  &:hover{
    background: #455CEC;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 23%;
  right: 60%;
  width: 20px;
  display: flex;
  align-items: center;
`;

const Text2 = styled.div`
  white-space: nowrap;
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => (props.now ?'white' : 'black')};
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

const Navigation = ({click, content}) => {

  return(
    <Container>{NAV_ITEMS.map(({text, imgPath, width}) => {
      // {content === imgPath}
      return (
        <div key={text} style={{position :'relative'}}>
          <Text style={{width: '20px',
                      display: 'flex',
                      alignItems: 'center'}}>
            <div>
              <img style={{cursor: 'pointer'}} src={require('../../images/icon/' + imgPath + '.svg')} alt={text}/>
            </div>
            <Text2 now={content === imgPath ? 1 : 0}>{text}</Text2>
          </Text>
          <Button onClick={click}
                  key={text} 
                  name={imgPath}
                  now={content === imgPath ? 1 : 0}
                  style={{ width: width}}>
          </Button>
        </div>
      )})}
    </Container>
  )
}

export default Navigation;