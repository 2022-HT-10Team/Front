import React from "react";
import LoginForm from "./LoginForm";

const Login = (props: { setName: (name: string) => void }) => {
  return(
    <main>
      <LoginForm setName={props.setName}/>
    </main>
  )
}

export default Login;