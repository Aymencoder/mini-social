import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React, { useState } from 'react';

function App() {

  const [mode,setMode] = useState("light")
  

  const darkTheme = createTheme({
    palette:{
      mode: mode, 
    }
  })
  return (
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home setMode={setMode} mode={mode} />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
