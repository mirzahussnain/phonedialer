import React from 'react'
import DialedNumber from './pages/DialedNumber'
import CallLog from './pages/CallLog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Dialer from './pages/Dialer'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dialer/>}/>
    <Route path='/calling' element={<DialedNumber/>}/> 
    <Route path='/calllog' element={<CallLog/>}/>  
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App