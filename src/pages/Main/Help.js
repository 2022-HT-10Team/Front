import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 8px;
`;

const Title = styled.h2`
  margin-left: 68px;
`;

const PeopleBox = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 30px 0 0 68px;
  width: 532px;
  height: 230px;
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
  position: absolute;
  left: 52px;
  bottom: 55px;
  margin-top: 40px;
  &:last-child{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #A0A0A0;
  }
  div {
    margin-bottom: 4px;
    span{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #444444;
    }
  }
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

const TextTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #444444;
`;

const Contents = styled.div`
  margin-top: 12px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const ContentBox = styled.div`
  width: 344px;
  position: absolute;
  top: 40px;
  right: 40px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -5%;
  right: -3%;
  width: 48px;
  height: 48px;
  filter: drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(15px);
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
                    linear-gradient(to right, #fff 0%, #0017A6 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 20px;
`;

const CText = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #444444;
`;

const Flex = styled.div`
  display: flex;
`;

const Help = () => {
  const [dtlist, setdtlist] = useState([]);
  const [maping, setMaping] = useState(false);

  const bringGraduate = async () => {
   await axios.get("http://192.168.109.124:8080/viewboard")
        .then((res) => {
            console.log(res.data.data)
            setdtlist({
                ItemList: res.data.data
            });
            if (res.data.data !== undefined){
              setMaping(true)
            }
        }).catch((res) => {
          console.log(res)
        })
  }

  useEffect(() => {
    bringGraduate(); 
  }, [])

  return (
    <Container>
      <Title>도움 게시물</Title>
      <Flex>
      {maping && dtlist.ItemList.map(({name, cardinal, department, belong, title, content}) => 
        <PeopleBox key={title}>
          <PeopleImg src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <Box>
            <div>
              <span>{name}</span>
            </div>
            <div>{department}</div>
          </Box>
          <ContentBox>
            <TextTitle>{title}</TextTitle>
            <Contents>{content}</Contents>
          </ContentBox>
          <Circle><CText>{cardinal}</CText></Circle>
        </PeopleBox>
      )}
      </Flex>
      <PaggingL>
        <img src={require('../../images/icon/PaggingL.svg').default} alt='왼'/>
      </PaggingL>
      <PaggingR>
      <img src={require('../../images/icon/PaggingR.svg').default} alt='오'/>
      </PaggingR>
    </Container>
  )
}

export default Help;