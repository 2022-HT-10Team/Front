import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../FindUser/Navigation"
import ShowBoard from "./ShowBoard";
import Bottom from "./Bottom";
import Insert from "./Insert";

const Container = styled.div`
  background: #F6F9FF;
  margin: 0;
  width: 1240px;
  height: 100vh;
`;



const BoardForm = ({id}) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('ShowBoard');
  
  const buttonValueSetting = (e) => {
    const { name } = e.target;

    setContent(name);
  };

  const selectComponent = {
    ShowBoard: <ShowBoard click={buttonValueSetting}/>,
  };

  console.log(modal);

  return(
    <Container>
      {modal && <Insert setModal={setModal} id={id}/>}
      <Navigation />
      {selectComponent[content]}
      <Bottom setModal={setModal}/>
    </Container>
  )
}

export default BoardForm;