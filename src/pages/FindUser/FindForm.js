import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import All from "./All";

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
    All: <All click={buttonValueSetting}/>,
  };

  console.log(content);

  return(
    <Container>
      <Navigation />
      {selectComponent[content]}
    </Container>
  )
}

export default FindForm;