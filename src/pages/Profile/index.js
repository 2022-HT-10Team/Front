import React from "react";
import Nav from "../../components/Nav/Nav";
import ProfileForm from "./ProfileForm";
import styled from "styled-components";
import SideBar from "../../components/sideBar/SideBar";

const Container = styled.div`
  display: flex;
`;

const Profile = (props : { name: String, id: String }) => {
  return(
    <Container>
      <Nav />
      <ProfileForm id={props.id}/>
      <SideBar name={props.name}/>
    </Container>
  );
};

export default Profile;