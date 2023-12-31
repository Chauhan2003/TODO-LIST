import React from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Today from './pages/Today';
import Task from './pages/Task';
import Addtask from './pages/Addtask';
import Stickywall from './pages/Stickywall';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path='/' element={<Today />} />

        <Route path='/todaytask' element={<Today />} />
        <Route path='/alltask' element={<Task />} />
        <Route path='/addtask' element={<Addtask />} />
        <Route path='/stickywall' element={<Stickywall />} />
      </Routes>
    </Router>
  )
}

export default App
