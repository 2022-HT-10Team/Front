import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
`;

const Box = styled.div`
  position: relative;
  width: 1104px;
  height: 305px;
  background: linear-gradient(152.86deg, #455CEC 3.23%, #0017A6 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const Title = styled.h2`
  margin: 68px 0px 0px 114px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  letter-spacing: -0.02em;
  color: white;
`;

const Content = styled.h3`
  margin: 12px 0px 0px 114px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: white;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 27px 0 0 114px;
  width: 238px;
  height: 50px;
  background: linear-gradient(107.12deg, rgba(255, 255, 255, 0.02) -20.63%, rgba(255, 255, 255, 0) 152.89%, rgba(255, 255, 255, 0.02) 152.89%);
  filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(15px);
  border: 1px solid white;
  border-radius: 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color:white;
`;

const Banner = () => {
  const getPage = () => {
    window.location.href="/help"
   }
   
  return (
    <Container>
      <Box>
        <Title>너를 부르는 Calling u</Title>
        <Content>졸업생들에게 도움을 요청해 보세요</Content>
        <Button onClick={getPage}>도움 요청하기</Button>
        <img src={require('../../images/banner/banner1.png')} 
             alt='배너'
             style={{ position: 'absolute',
                      right: '0%',
                      top: '-23%'
          }}/>
      </Box>
    </Container>
  )
}

export default Banner;