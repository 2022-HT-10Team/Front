import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: transparent;
`;

const Blur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 100vh;
  background: linear-gradient(107.12deg, 
                              rgba(255, 255, 255, 0.02) -20.63%,
                              rgba(255, 255, 255, 0) 152.89%, 
                              rgba(255, 255, 255, 0.02) 152.89%);
  backdrop-filter: blur(15px);
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 510px;
  height: 602px;
  background-color: white;
  border-radius: 20px
`;

const FormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
    margin-top: 8px;
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
  height: 40px;
  border: 1px solid #DBDBDB;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Img = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0%;
  top: 3%;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgBox2 = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0%;
  right: 0%;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #F8F9FD;
`;

const InfoChange = (props : {getPop : any, setPop : Boolean => void}) => {
  const [id, setId] = useState('');
  const [belong, setBelong] = useState('');
  const [department, setdepartment] = useState('');

  const submit = async(e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://192.168.109.124:8080/edituser',{
      id,
      belong,
      department
    }).then((res) => {
      console.log(res)
      props.setPop(false)
    })

  } 

  return(
    <Container>
      <Blur>
        <Box>
          <FormBox onSubmit={submit}>
            <div style={{position: 'relative'}}>
              <Title>프로필 수정</Title>
              <Img onClick={props.getPop} name={'true'} src={require('./../../images/X.png')} alt='창닫기'/>
              <ImgBox>
                <div style={{position: 'relative'}}>
                  <img src={require('./../../images/profile.png')} alt='프로필'/>
                  <ImgBox2>
                    <img src={require('./../../images/Image.png')} alt='이미지변경'/>
                  </ImgBox2>
                </div>
              </ImgBox>
              <InputBox>
                <div>
                  <Text>아이디</Text>
                </div>
                <div>
                <Input required onChange={e => setId(e.target.value)}></Input>
                </div>
              </InputBox>
              <InputBox>
                <div>
                <Text>전공</Text>
                </div>
                <div>
                <Input required onChange={e => setdepartment(e.target.value)}></Input>
                </div>
              </InputBox>
              <InputBox>
                <div>
                <Text>소속</Text>
                </div>
                <div>
                <Input required onChange={e => setBelong(e.target.value)}></Input>
                </div>
              </InputBox>
              <Button type="submit">변경하기</Button>
            </div>
          </FormBox>
        </Box>
      </Blur>
    </Container>
  )
}

export default InfoChange;