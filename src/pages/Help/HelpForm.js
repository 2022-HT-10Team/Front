import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import All from "./All";
import Android from "./Android";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Embedded from "./Embedded";
import Ios from "./Ios";

const Container = styled.div`
  background: #F6F9FF;
  margin: 0;
  width: 1240px;
  height: 100vh;
`;

const FindForm = () => {
  const [content, setContent] = useState('All');
  
  const buttonValueSetting = (e) => {
    const { name } = e.target;

    setContent(name);
  };

  const selectComponent = {
    All: <All/>,
    Android: <Android />,
    FrontEnd: <FrontEnd/>,
    BackEnd: <BackEnd />,
    Embedded: <Embedded/>,
    Ios: <Ios />,
  };

  console.log(content);

  return(
    <Container>
      <Navigation click={buttonValueSetting}/>
      {selectComponent[content]}
    </Container>
  )
}

export default FindForm;