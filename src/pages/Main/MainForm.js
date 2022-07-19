import React from "react";
import Help from "./Help";
import Banner from "./Banner";
import People from "./People";
import styled from "styled-components";

const Container = styled.main`
  background: #F9FBFF;
  margin: 0;
  width: 1240px;
  height: 100vh;
`;

const MainForm = () => {
  return (
    <Container>
      <Banner />
      <People />
      <Help />
    </Container>
  )
}

export default MainForm;