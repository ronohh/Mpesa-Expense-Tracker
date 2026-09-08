import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <>


    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/categories" element={<Categories/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App