import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(115.33deg, #43CBFF 0%, #455CEC 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const Title = styled.h2`
  margin-top: 40px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Text = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Button = styled.button`
  margin-top: 25px;
  cursor: pointer;
  border: 1px solid white;
  width: 266px;
  height: 72px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  background: linear-gradient(107.12deg, rgba(255, 255, 255, 0.02) -20.63%, rgba(255, 255, 255, 0) 152.89%, rgba(255, 255, 255, 0.02) 152.89%);
  filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(15px);
  border-radius: 20px;
`;

const Img = styled.img`
  position: absolute;
  bottom: 12%;
  left: 32%;
  width: 270px;
  height: 270px;
`;

const ChangeInfo = ({getPop}) => {
  return(
    <Container>
      <div style={{marginLeft: '40px'}}>
        <Title>프로필 수정</Title>
        <Text>이름,전공,소속,프로필 사진을<br/>변경해보세요</Text>
        <Button onClick={getPop} name={'Profile'}>프로필 수정하기</Button>
      </div>
      <Img src={require('./../../images/ChangeInfo.png')} alt='프로필 수정'/>
    </Container>
  )
}

export default ChangeInfo;