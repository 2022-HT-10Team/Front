import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1240px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1104px;
  height: 450px;
  background-color: white;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Contents = styled.div`
  width: 448px;
  height: 218px;
`;

const Flex = styled.div`
  margin-top: 21px;
  margin-left: 100px;
  display: flex;
  align-items: center;
  width: 448px;
`;

const Label = styled.label`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const Text = styled.input`
  margin-left: 28px;
  background: white;
  border:none;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: -0.02em;
  color: #444444;
`;

const Info = ({id}) => {
  const [cardinal, setcardinal] = useState('');
  const [name, setName] = useState('');
  const [belong, setBelong] = useState('');
  const [department, setdepartment] = useState('');
  
  useEffect(() => {
    async function init () {
      const res = await axios.get('http://192.168.109.124:8080/userdata',{
        params: {id: id}
      });
      console.log(res);
      setcardinal(res.data.data.cardinal)
      setName(res.data.data.name)
      setBelong(res.data.data.belong)
      setdepartment(res.data.data.department)
    }
    init();
  },[])

  return(
    <Container>
      <InfoBox>
        <Img src={require('../../images/logo/Profile.svg').default} alt='프로필'/>
        <Contents>
          <Flex>
            <Label>이름</Label>
            <Text value={name} disabled/>
          </Flex>
          <Flex>
            <Label>기수</Label>
            <Text value={cardinal} disabled/>
          </Flex>
          <Flex>
            <Label>전공</Label>
            <Text value={department} disabled/>
          </Flex>
          <Flex>
            <Label>소속</Label>
            <Text value={belong} disabled/>
          </Flex>
        </Contents>
      </InfoBox>
    </Container>
  )
}

export default Info;