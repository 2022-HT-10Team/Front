import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';

const LoginForm = (props: { setName: (name: string) => void }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [cookies, setCookie] = useCookies(['id']);

  const submit = async(e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://10.80.161.248:8080/login',{
      id, password
    }).then((res) => {
      setCookie('id', res.data.token)
      props.setName(id);
      setRedirect(true)
    }).catch((res) => {
      console.log(res)
    })
  
  }

  if (redirect) return <Navigate replace to="/"/>

  return(
    <form onSubmit={submit}>
      <input type="id" placeholder="id" required onChange={e => setId(e.target.value)}></input>
      <input type="password"placeholder="password" required onChange={e => setPassword(e.target.value)}></input>
      <button type="submit">로그인</button>
    </form>
  )
}

export default LoginForm;