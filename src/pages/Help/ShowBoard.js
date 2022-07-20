import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  margin-left: 40px;
  cursor: pointer;
  position: relative;
  width: 332px;
  height: 363px;
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
  right: 130px;
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

const Button = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  cursor: pointer;
  background: #F0F4FD;
  border: none;
  border-radius: 20px;
  width: 48px;
  height: 48px;
`;

const Name = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #444444;
  margin-bottom: 2px;
`;

const Depar = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #A0A0A0;
  margin-left: 2px;
`;

const Cardinal = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const Title = styled.div`
  position: absolute;
  top: 126px;
  left: 28px;
  height: 60px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #444444;
`;

const Contents = styled.div`
  position: absolute;
  top: 188px;
  left: 28px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const ShowBoard = () => {
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

  const getContent = () => {
    console.log('클릭')
  }

  useEffect(() => {
    bringGraduate(); 
  }, [])
  
  return(
    <Container>
      <div style={{marginLeft: '68px', display: 'flex'}}>
        {maping && dtlist.ItemList.map(({name, cardinal, department, belong, title, content}) => 
          <Box onClick={getContent}>
            <Img src={require('../../images/profile/3.svg').default} alt='프로필'/>
            <TextBox>
              <Name>{name}</Name>
              <Depar>{department}</Depar>
              <Cardinal>{cardinal}</Cardinal>
            </TextBox>
            <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
            <Title>{title}</Title>
            <Contents>{content}</Contents>
          </Box>
          )}
      </div>
    </Container>
  )
}

export default ShowBoard;