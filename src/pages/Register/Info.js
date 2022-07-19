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
  margin-top: 40px;
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
          <Input1 onChange={(e)=> setName(e.target.value)}/>
          <Input2 onChange={(e)=> setAge(e.target.value)}/>
          <Input3 onChange={(e)=> setNumber(e.target.value)}/>
          <Input3 onChange={(e)=> setMajor(e.target.value)}/>
        </div>
      </InputBox>
      <PaggingR onClick={click} name={'Form'} value={all}>Next</PaggingR>
    </InfoBox>
  )
}

export default Info;