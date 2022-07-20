import React, {SyntheticEvent, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  width: 1084px;
  height: 546px;
  margin-bottom: 70px;
`;

const Flex = styled.div`
  position: fixed;
  z-index: 999;
  width: 1240px;
  height: 1080px;
  background: linear-gradient(107.12deg, rgba(255, 255, 255, 0.02) -20.63%, rgba(255, 255, 255, 0) 152.89%, rgba(255, 255, 255, 0.02) 152.89%);
  backdrop-filter: blur(15px);
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

const Input = styled.input`
  border: 1px solid #DBDBDB;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
  width: 606px;
  height: 80px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const TextArea = styled.textarea`
  border: 1px solid #DBDBDB;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
  width: 606px;
  height: 300px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
`;

const Position = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

const Button = styled.button`
  position: absolute;
  left: 40px;
  bottom: 40px;
  background: linear-gradient(94.03deg, #43CBFF 0%, #4E64EC 100%);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 350px;
  height: 68px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const ImgCh = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  width: 350px;
  height: 350px;
  background: #F9FBFF;
  border-radius: 20px;
`;

const ImgButton = styled.button`
  position: absolute;
  left: 350px;
  top: 350px;
  width: 48px;
  height: 48px;
  background: #F8F9FD;
  border:none;
  border-radius: 50%;
`;

const Insert = (props: {setModal : (modal : Boolean) => void, id:String}) => {
  const userid = props.id;
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const init = async(e:SyntheticEvent) => {
    e.preventDefault();

    console.log(userid,title,content);
    await axios.post('http://192.168.109.124:8080/uploadcontent',{
      userid, content, title
    }).then((res) => {
      props.setModal(false);
    }).catch((res) => {
      console.log(res)
    })
  }
  
  return (
    <Flex>
      <Container>
        <div>
          <ImgCh/>
          <ImgButton><span><img src={require('../../images/Image.png')} alt='이미지'/></span></ImgButton>
          <Button onClick={init}>작성하기</Button>
          <Position>
            <div>
              <div>
                <Text>제목</Text>
              </div>
              <div>
                <Input placeholder="제목을 작성해주세요" onChange={(e) => setTitle(e.target.value)}/>
              </div>
            </div>
            <div style={{marginTop: '18px'}}>
              <div>
                <Text>내용</Text>
              </div>
              <div>
                <TextArea placeholder="내용을 작성해주세요" onChange={(e) => setContent(e.target.value)}/>
              </div>
            </div>
          </Position>
        </div>
      </Container>
    </Flex>
  )
}

export default Insert;