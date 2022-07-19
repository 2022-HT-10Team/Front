import React from "react";
import styled from "styled-components";

// 확인용 서버호출 X

const Container = styled.div`
`;

const Box = styled.div`
  margin-left: 34px;
  position: relative;
  width: 328px;
  height: 186px;
  background: #FFFFFF;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const Img = styled.img`
  position: absolute;
  left: 32px;
  top: 32px;
  width: 80px;
  height: 80px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 41px;
  right: 80px;
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

const Belong = styled.div`
  position: absolute;
  left: 32px;
  bottom: 32px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #444444;
`;

const Button = styled.button`
  position: absolute;
  right: 32px;
  bottom: 32px;
  cursor: pointer;
  background: #F0F4FD;
  border: none;
  border-radius: 20px;
  width: 48px;
  height: 48px;
`;

const Android = () => {
  return(
    <Container>
      <div style={{marginLeft: '68px',
                  display: 'flex',
                  marginBottom: '34px'}}>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
      </div>
      <div style={{marginLeft: '68px',
                  display: 'flex',
                  marginBottom: '34px'}}>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
      </div>
      <div style={{marginLeft: '68px',
                  display: 'flex',
                  marginBottom: '34px'}}>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
        <Box>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>김서현</span>
              <span style={{color: '#A0A0A0'}}>1기</span>
            </div>
            <Major>Android</Major>
          </TextBox>
          <Belong>카카오</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>
      </div>
    </Container>
  )
}

export default Android;