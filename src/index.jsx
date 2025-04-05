import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'

import Nav from './pages/Nav.jsx'
import App from './App.jsx'
import Skills from './pages/Skills'
import Projects from './pages/Projects.jsx'
import About from './pages/About'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<App />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />

      </Route>
    </Routes>
  </BrowserRouter>


)
