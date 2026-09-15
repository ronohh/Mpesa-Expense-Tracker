import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Transactions from "./pages/Transactions";

const App = () => {
  return (
    <>


    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/transactions" element={<Transactions/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App 