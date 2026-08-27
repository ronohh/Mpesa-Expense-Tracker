import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>

    <Navbar/>

    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App