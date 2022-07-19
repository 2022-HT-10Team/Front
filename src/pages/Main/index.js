import React from "react";
import Nav from "../../components/Nav/Nav";
import MainForm from "./MainForm";
import styled from "styled-components";
import SideBar from "../../components/sideBar/SideBar";

const Container = styled.div`
  display: flex;
`;

const Main = (props : { name: String }) => {
  return(
    <Container>
      <Nav />
      <MainForm />
      <SideBar name={props.name}/>
    </Container>
  );
};

export default Main;