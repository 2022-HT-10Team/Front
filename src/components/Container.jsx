import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Cont = styled.div`
  background-color: #F9FBFF;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  width: 1360px;
  height: 800px;
  background-color: white;
  border-radius: 20px;
`;

const ImgBox = styled.div`
  width: 572px;
  height: 800px;
  background: linear-gradient(146.36deg, #455CEC 0%, #0017A6 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px 0px 0px 20px;
`;

const Img = styled.img`
  position: absolute;
  left: 12%;
  top: 3%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 788px;
  height: 270px;
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

const MainBox = styled.div`
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
`;

const Text = styled.div`
  margin-top: 40px;
  margin-left: 290px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #444444;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #455CEC;
`

const Container = ({ children, Type }) => {
  console.log(Type)
  return(
    <Cont>
      <Box>
        <ImgBox>
          <Img src={require('../images/Container.png')} alt='메일'/>
        </ImgBox>
        <MainBox>
          <LogoBox>
            <LogoImg src={require('../images/logo/Main.svg').default} alt='callingU'/>
            <LogoText>calling u</LogoText>
          </LogoBox>
          {children}
          <Text>{ Type ? '아직 회원이 아니신가요?':'이미 회원이신가요?'}<LinkText to={Type ? '/register' : '/login'}>{Type ? '회원가입':'로그인'}</LinkText></Text>
        </MainBox>
      </Box>
    </Cont>
  )
}

export default Container;