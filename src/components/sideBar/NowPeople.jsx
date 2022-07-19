import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 70px 0 0 62px;
`
const Text = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
`;

const NowProfile = styled.div`
  position: relative;
  margin-top: 40px;
`;

const Contents = styled.div`
  position: absolute;
  top: 5%;
  left: 23%;
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

const NowPeople = () => {
  return(
    <Container>
      <Text>현재 활동중인 졸업생 선배</Text>
      {PROFILE_ITEMS.map(({ name, number, major, path }) => {
      return (
      <NowProfile key={name}>
        <img src={require('../../images/profile/' + path +'.svg')} alt='프로필'/>
        <Contents>
          <div>
            <span>{name}</span>
            <span style={{color:'#A0A0A0'}}>{number}</span>
          </div>
          <div>{major}</div>
        </Contents>
      </NowProfile>
      )})}   
    </Container>
  )
}

const PROFILE_ITEMS = [
  {
    name: '김영재',
    number: '4기',
    major: 'Android',
    path: '3'
  },
  {
    name: 'test',
    number: '4기',
    major: 'Android',
    path:'1'
  },
  {
    name: 'test2',
    number: '4기',
    major: 'Android',
    path:'2'
  },
  {
    name: 'test3',
    number: '4기',
    major: 'Android',
    path:'3'
  },
]

export default NowPeople;