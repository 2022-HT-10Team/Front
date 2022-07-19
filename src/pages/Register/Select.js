import React from "react";
import styled from "styled-components";

const SelectorBox = styled.div`
  display: flex;
  justify-content: center;
  height: 385px;
`;

const Selector1 = styled.div`
  position: relative;
  width: 252px;
  height: 325px;
  background: linear-gradient(115.33deg, #43CBFF 0%, #455CEC 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const Selector2 = styled.div`
  position: relative;
  margin-left: 40px;
  width: 252px;
  height: 325px;
  background: linear-gradient(115.33deg, #455CEC 0%, #0017A6 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const SeImg = styled.img`
  position: absolute;
  top: 15%;
  left: 58%;
  transform: translateX(-50%);
`;

const SeButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid white;
  width: 146px;
  height: 50px;
  background: linear-gradient(107.12deg, rgba(255, 255, 255, 0.02) -20.63%, rgba(255, 255, 255, 0) 152.89%, rgba(255, 255, 255, 0.02) 152.89%);
  filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(15px);
  border-radius: 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Select = ({click}) => {
  return (
    <SelectorBox>
      <Selector1>
        <SeImg src={require('../../images/char1.png')} alt='재학생'/>
        <SeButton onClick={click} name={'Info'} id='true'>재학생</SeButton>
      </Selector1>
      <Selector2>
        <SeImg src={require('../../images/char2.png')} alt='졸업생'/>
        <SeButton onClick={click} name={'Info'} id="false">졸업생</SeButton>
      </Selector2>
    </SelectorBox>
  )
}

export default Select;