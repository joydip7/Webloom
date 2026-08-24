 import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import { AuthLayout, GuestLayout } from './pages/Layout'
import HomePage from './pages/HomePage'
import PreviewPage from './pages/PreviewPage'
 
 const App = () => {
   return (
     <Routes>
        {/* Login Routes */}
        <Route element={<GuestLayout/>}>
            <Route path="/login" element={<AuthPage mode="login"/>}/>
            <Route path="/register" element={<AuthPage mode="register"/>}/>
        </Route>

        {/* Protected Routes */}
        <Route element={<AuthLayout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/builder/:id" element={<HomePage/>}/>
            <Route path="/preview/:id" element={<PreviewPage/>}/>
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace/>}/>
     </Routes>
   )
 }
 
 export default App
 