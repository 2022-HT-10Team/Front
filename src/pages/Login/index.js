import React from "react";
import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = (props: { setName: (name: string) => void , setId: (id: String) => void}) => {
  return(
    <Container Type={true}>
      <LoginForm setName={props.setName} setId={props.setId}/>
    </Container>
  )
}

export default Login;