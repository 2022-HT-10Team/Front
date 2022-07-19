import React from "react";
import Profile from "./Profile";
import NowPeople from "./NowPeople";
import styled from "styled-components";

const Container = styled.section`
  background: white;
  width: 400px;
  height: 100vh;
`;

const SideBar = ({name}) => {
  return (
    <Container>
      <Profile name={name}></Profile>
      <NowPeople/>
    </Container>
  )
}

export default SideBar;