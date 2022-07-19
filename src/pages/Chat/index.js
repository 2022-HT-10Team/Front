import React from "react";
import Nav from "../../components/Nav/Nav";
import SideBar from "../../components/sideBar/SideBar";
import styled from "styled-components";
import ChatClient from "../../components/Chat/ChatClient";

const Container = styled.div`
  display: flex;
`;

const ChatForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F9FBFF;
  width: 1240px;
`

const Chat = ({ name }) => {
  return(
    <Container>
      <Nav />
      <ChatForm>
        <ChatClient userToken={name}></ChatClient>
      </ChatForm>
      <SideBar name={name}/>
    </Container> 
  )
}

export default Chat;