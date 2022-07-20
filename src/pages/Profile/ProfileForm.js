import React, { useEffect, useState } from "react";
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
  const [pop, setPop] = useState(true);

  const getPop = (e) => {
    const { name } = e.target;

    console.log(name)
    if(name === 'Profile'){
      setIsPrChange(true)
      setPop(true)
    }else if(name === 'Password'){
      setIsPwChange(true);
      setPop(true)
    }else if(name === 'true'){
      setIsPrChange(false)
      setIsPwChange(false)
      setPop(false)
    }
  }

  useEffect(() => {
    if(pop === false){
      setIsPrChange(false)
      setIsPwChange(false)
    }
  },[pop])

  return(
    <Container>
      {isPrChange ? <InfoChange setPop={setPop} 
                                getPop={getPop} />: null}
      {isPwChange ? <ProfileEdit setPop={setPop} 
                                 getPop={getPop}/>: null}
      <Info pop={pop} id={id}/>
      <div style={{display: 'flex',
                  justifyContent: 'center'}}>
        <ChangeInfo getPop={getPop}/>
        <ChangePw getPop={getPop}/>
      </div>
    </Container>
  )
}

export default ProfileForm;