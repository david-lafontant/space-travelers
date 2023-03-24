import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Dragons, Missions, Profile, Rockets } from './pages/index';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
