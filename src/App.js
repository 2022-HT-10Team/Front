import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Main, Login, Register, Chat, VideoChat, Profile, FindUser } from "./pages/PageList";
import { CookiesProvider } from "react-cookie";
function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  console.log(id)
  return (
    <CookiesProvider>
      <Router>
        <Routes>
        <Route path="/*" element={name ? <Main name={name}/> : <Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login setName={setName} setId={setId}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/chat" element={<Chat name={name}/>}/>
          <Route path="/video" element={<VideoChat/>}/>
          <Route path="/profile" element={<Profile name={name} id={id}/>}/>
          <Route path="/finduser" element={<FindUser name={name}/>}/>
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;
