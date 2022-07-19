import React from "react";
import Nav from "../../components/Nav/Nav";
import HelpForm from "./HelpForm";
import styled from "styled-components";
import SideBar from "../../components/sideBar/SideBar";

const Container = styled.div`
  display: flex;
`;

const Help = (props : { name: String }) => {
  return (
    <Container>
      <Nav />
      <HelpForm />
      <SideBar name={props.name}/>
    </Container>
  )
}

export default Help;