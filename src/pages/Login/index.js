import React from "react";
import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = (props: { setName: (name: string) => void }) => {
  return(
    <Container Type={true}>
      <LoginForm setName={props.setName}/>
    </Container>
  )
}

export default Login;