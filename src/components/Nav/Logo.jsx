import React from "react";
import styled from "styled-components";

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 150px;
`;

const LogoImg = styled.img`
  width: 27px;
  height: 47px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const Logo = () => {
  return(
    <LogoBox>
      <LogoImg src={require('../../images/logo/Main.svg').default} alt='callingU'/>
      <LogoText>calling u</LogoText>
    </LogoBox>
  )
}

export default Logo;