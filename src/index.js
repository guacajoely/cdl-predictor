import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/nav/navBar.js';
import { ApplicationViews } from './components/views/appViews.js';
import './index.css';


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <BrowserRouter>
    
    <Routes>

      <Route path="*" element={
          <>
            <NavBar />
            <ApplicationViews />
          </>
      } />

	  </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
