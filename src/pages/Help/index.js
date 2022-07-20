import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import SideBar from "../../components/sideBar/SideBar";
import BoardForm from "./BoardForm";

const Container = styled.div`
  display: flex;
`;

const Help = ({name, id}) => {
  return(
    <Container>
      <Nav />
      <BoardForm id={id}/>
      <SideBar name={name}/>
    </Container>
  )
}

export default Help;