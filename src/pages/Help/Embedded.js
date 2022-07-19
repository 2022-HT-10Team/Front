import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
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

const Embedded = () => {
  const [dtlist, setdtlist] = useState([]);

  const bringGraduate = async () => {
   await axios
      .get("http://192.168.109.124:8080/viewgraduate")
        .then((res) => {
            setdtlist({
                ItemList: res.data.id
            });
        }).catch((res) => {
          console.log(res)
        })
  }

  useEffect(() => {
    bringGraduate(); 
  }, [])

  console.log(dtlist)
  return(
    <Container>
      <div style={{marginLeft: '68px'}}>
        {false && dtlist.ItemList.map(({name, cardinal, department, belong}) => 
        <Box key={name}>
          <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
          <TextBox>
            <div>
              <span>{name}</span>
              <span style={{color: '#A0A0A0'}}>{cardinal}</span>
            </div>
            <Major>{department}</Major>
          </TextBox>
          <Belong>{belong}</Belong>
          <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
        </Box>)}
      </div>
    </Container>
  )
}

export default Embedded;