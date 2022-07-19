import React, { useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import ChangeInfo from "./ChangeInfo";
import ChangePw from "./ChangePw";
import ProfileEdit from "./ProfileEdit";
import InfoChange from "./InfoChange";

const Container = styled.main`
  background: #F6F9FF;
  margin: 0;
  width: 1240px;
  height: 100vh;
`;

const ProfileForm = ({id}) => {
  const [isPrChange, setIsPrChange] = useState(false);
  const [isPwChange, setIsPwChange] = useState(false);

  const getPop = (e) => {
    const { name } = e.target;

    console.log(name)
    if(name === 'Profile'){
      setIsPrChange(true)
    }else if(name === 'Password'){
      setIsPwChange(true);
    }else if(name === 'true'){
      setIsPrChange(false)
      setIsPwChange(false)
    }
  }
  return(
    <Container>
      {isPrChange ? <InfoChange getPop={getPop}/>: null}
      {isPwChange ? <ProfileEdit getPop={getPop}/>: null}
      <Info id={id}/>
      <div style={{display: 'flex',
                  justifyContent: 'center'}}>
        <ChangeInfo getPop={getPop}/>
        <ChangePw getPop={getPop}/>
      </div>
    </Container>
  )
}

export default ProfileForm;