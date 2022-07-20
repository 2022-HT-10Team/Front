import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 385px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input1 = styled.input`
  width: 235px;
  height: 68px;
  border: 1px solid #A0A0A0;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

const Input2 = styled.input`
  margin-left: 40px;
  width: 155px;
  height: 68px;
  border: 1px solid #A0A0A0;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

const Input3 = styled.input`
  margin-top: 8px;
  width: 430px;
  height: 68px;
  border: 1px solid #A0A0A0;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

const PaggingR = styled.button`
  cursor: pointer;
  border:none;
  position: absolute;
  bottom: 44%;
  right: 8%;
  width: 40px;
  height: 40px;
  background-color: #C4CEE5 !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.label`
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const Info = ({click}) => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [all, setAll] = useState('');
  const [major, setMajor] = useState('');

  useEffect(() => {
    setAll(name + '&' + age + '&' +number + '&' + major)
  },[name,age,number,major])

  return(
    <InfoBox>
      <InputBox>
        <div style={{width: '450px'}}>
          <div style={{display: 'flex'}}>
            <div>
              <div>
                  <Text>이름</Text>
              </div>
              <Input1 onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
              <div style={{marginLeft: '40px'}}>
                  <Text>기수</Text>
              </div>
                <Input2 onChange={(e)=> setAge(e.target.value)}/>
            </div>
          </div>
          <div style={{marginTop: '20px'}}>
              <Text>소속</Text>
          </div>
          <div>
          <Input3 onChange={(e)=> setNumber(e.target.value)}/>
          </div>
          <div style={{marginTop: '20px'}}>
              <Text>전공</Text>
          </div>
          <div>
          <Input3 onChange={(e)=> setMajor(e.target.value)}/>
          </div>
        </div>
      </InputBox>
      <PaggingR onClick={click} name={'Form'} value={all}>Next</PaggingR>
    </InfoBox>
  )
}

export default Info;