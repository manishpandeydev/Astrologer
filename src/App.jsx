import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Result from './components/Result'

function App() {


  return (
    <>

<BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/result' element={<Result/>}></Route>
</Routes>

</BrowserRouter>




    </>
  )
}

export default App
