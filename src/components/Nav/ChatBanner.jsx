import React from "react";
import styled from "styled-components";

const BContainer = styled.div`
  display:flex;
  justify-content: center;
`;

const Banner = styled.div`
  position: relative;
  width: 210px;
  height: 279px;
  background: linear-gradient(
    152.86deg, 
    #455CEC 3.23%, 
    #0017A6 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const BannerImg = styled.img`
  position: absolute;
  width: 214px;
  height: 208px;
  top: 10%;
  left: 17px;
`;

const BannerButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 162px;
  height: 46px;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid white;
  border-radius: 20px;
  background: none;
  color: white;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const ChatBanner = () => {
  const getPage = () => {
   window.location.href="/chat"
  }

  return(
    <BContainer>
      <Banner>
        <BannerImg src={require('../../images/email.png')} alt='email'/>
        <BannerButton onClick={getPage}>채팅하러 가기</BannerButton>
      </Banner>
    </BContainer>
  )
}

export default ChatBanner;