import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Result from './components/Result'

function App() {


  return (
    <>

<HashRouter>
<Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/result' element={<Result/>}></Route>
</Routes>

</HashRouter>




    </>
  )
}

export default App
