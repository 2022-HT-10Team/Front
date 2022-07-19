import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.label`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 40px;
  width: 430px;
  height: 68px;
  background: linear-gradient(94.03deg, #43CBFF 0%, #4E64EC 100%);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Input = styled.input`
  margin-top:8px;
  width: 430px;
  height: 68px;
  border: 1px solid #A0A0A0;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

const RegisterForm = ({Age, Name, Number, Belong, Major}) => {
  const [cardinal, setcardinal] = useState('');
  const [name, setName] = useState('');
  const [belong, setBelong] = useState('');
  const [isStudent, setisStudent] = useState('');
  const [department, setdepartment] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setcardinal(Age)
    setName(Name)
    setBelong(Number)
    setisStudent(Belong)
    setdepartment(Major)
  },[])

  const submit = async(e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://192.168.109.124:8080/signup',{
      name,
      id, 
      password,
      cardinal,
      belong,
      isStudent,
      department
    })

    setRedirect(true)
  }

  if (redirect) return <Navigate replace to="/login"/>

  return(
    <Form onSubmit={submit}>
      <div>
        <div>
          <div>
            <Text>아이디</Text>
          </div>
          <div>
            <Input type="id" required onChange={e => setId(e.target.value)}/>
          </div>
        </div>
        <div>
          <div style={{marginTop: '32px'}}>
            <Text>비밀번호</Text>
          </div>
          <div>
            <Input type="password" required onChange={e => setPassword(e.target.value)}/>
          </div>
        </div>
        <Button type="submit">회원가입</Button>
      </div>
    </Form>
  )
}

export default RegisterForm;