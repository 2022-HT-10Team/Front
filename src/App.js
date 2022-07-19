import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Main, Login, Register } from "./pages/PageList";
import { CookiesProvider } from "react-cookie";
function App() {
  const [name, setName] = useState('');

  return (
    <CookiesProvider>
      <Router>
        <Routes>
        <Route path="/*" element={name ? <Main name={name}/> : <Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login setName={setName}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;
