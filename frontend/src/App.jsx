import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>} />

      <Route element={<Layout/>}>
        <Route path="/" element={<Dashboard/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App