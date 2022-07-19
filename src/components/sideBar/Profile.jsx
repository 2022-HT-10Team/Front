import React from "react";
import styled from "styled-components";

const MeBox = styled.div`
  display: flex;
  justify-content: end;
  height: 150px;
`;

const Light = styled.div`
  position: absolute;
  left: 82%;
  top: 5.5%;
  width: 48px;
  height: 48px;
  background: #F8F9FD;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Me = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-right: 24px;
`;

const UserName = styled.span`
  margin-left: 24px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const UserBox = styled.div`
  position: relative;
  height: 250px;
  margin-left: 62px;
`;

const Text = styled.div`
  width: 85px;
  height: 32px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  margin-bottom: 40px;
`;

const UserCard = styled.div`
  position: relative;
  width: 299px;
  height: 190px;
  background: linear-gradient(152.86deg, #43CBFF 3.23%, #4E64EC 100%);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  div {
    color: white;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    div{
      &:last-child{
        margin-top: 16px;
      }
      div{
        margin-bottom: 8px;
      }
      span {
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
`;

const FixedButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 88%;
  left: 50%;
  width: 146px;
  height: 50px;
  border: 2px solid white;
  background: linear-gradient(107.12deg, rgba(255, 255, 255, 0.02) -20.63%, rgba(255, 255, 255, 0) 152.89%, rgba(255, 255, 255, 0.02) 152.89%);
  filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(5px);
  border-radius: 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: white;
`;

const Profile = ({name}) => {
  const getPage = () => {
    window.location.href="/profile"
   }

  return(
    <div>
      <MeBox>
        <Light>
          <img src={require('../../images/icon/Light.svg').default} alt='모드'/>
        </Light>
        <Me>
          <img src={require('../../images/logo/Profile.svg').default} alt='프로필'/>
          <UserName>{name}</UserName>
          <img src={require('../../images/icon/Extend.svg').default} alt='버튼'/>
        </Me>
      </MeBox>
      <UserBox>
        <Text>내 프로필</Text>
        <UserCard>
          <div style={{position: 'absolute',
                      top: '50%',
                      left: '6%',
                      transform: 'translateY(-50%)'}}>
            <div>
              <div>전공</div>
              <span>Front-end</span>
            </div>
            <div>
              <div>기수</div>
              <span>5기</span>
            </div>
          </div>
        </UserCard>
        <FixedButton onClick={getPage}>수정하기</FixedButton>
      </UserBox>
    </div>
  )
}

export default Profile;