import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const PaggingL = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaggingR = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Create = styled.div`
  margin: 0 18px 0 18px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fixed = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50%;
`;

const Bottom = (props: {setModal : (modal : Boolean) => void}) => {
  return (
    <Fixed>
      <Container>
        <PaggingL>
          <img src={require('../../images/icon/PaggingL.svg').default} alt='왼'/>
        </PaggingL>
        <Create onClick={props.setModal}>
          <img src={require('../../images/icon/+.svg').default} alt='글생성'/>
        </Create>
        <PaggingR>
        <img src={require('../../images/icon/PaggingR.svg').default} alt='오'/>
        </PaggingR>
      </Container>
    </Fixed>
  )
}

export default Bottom;