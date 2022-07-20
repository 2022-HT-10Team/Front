import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  margin-left: 68px;
`;

const PeopleBox = styled.div`
  cursor: pointer;
  display: flex;
  margin: 30px 0 0 68px;
  width: 360px;
  height: 140px;
  background: #FFFFFF;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const PeopleImg = styled.img`
  margin: 30px 26px 0 40px;
  width: 80px;
  height: 80px;
`;

const Box = styled.div`
  margin-top: 40px;
  &:last-child{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #444444;
  }
  div {
    span{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      margin-right: 8px;
    }
  }
`;

const Major = styled.div`
  margin-top: 8px;
`;

const PaggingL = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0%;
  right: 10%;
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
  position: absolute;
  top: 0%;
  right: 5%;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const People = () => {
  const getPage = () => {
    window.location.href="/chat"
   }
  return (
    <Container>
      <Title>내 전공과 같은 졸업생 선배</Title>
      <PeopleBox onClick={getPage}>
        <PeopleImg src={require('../../images/profile/1.svg').default} alt='프로필'/>
        <Box>
          <div>
            <span>테스트</span>
            <span style={{color: '#A0A0A0'}}>1기</span>
          </div>
          <Major>(주)네이버</Major>
        </Box>
      </PeopleBox>
      <PaggingL>
        <img src={require('../../images/icon/PaggingL.svg').default} alt='왼'/>
      </PaggingL>
      <PaggingR>
      <img src={require('../../images/icon/PaggingR.svg').default} alt='오'/>
      </PaggingR>
    </Container>
  )
}

export default People;