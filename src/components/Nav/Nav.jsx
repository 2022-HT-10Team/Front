import React from "react";
import styled from "styled-components";
import Bar from "./Bar";
import ChatBanner from "./ChatBanner";
import Logo from "./Logo";

const Container = styled.nav`
  background: white;
  margin: 0;
  width: 280px;;
  height: 100vh;
`;

const Nav = () => {
  return(
    <Container>
      <Logo />
      <Bar />
      <ChatBanner />
    </Container>
  )
}

export default Nav;