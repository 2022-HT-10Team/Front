import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import SideBar from "../../components/sideBar/SideBar";
import FindForm from "./FindForm";

const Container = styled.div`
  display: flex;
`;

const FindUser = ({name}) => {
  return(
    <Container>
      <Nav />
      <FindForm />
      <SideBar name={name}/>
    </Container>
  )
}

export default FindUser;