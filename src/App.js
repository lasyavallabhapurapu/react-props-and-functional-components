/*import React from 'react'
import Events from './Events'
export default function App() {
  return (
    <div><Events/></div>
  )
}*/
import {browserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import contact from './components/contact'
import Navbar from './components/Navbar'
function App(){
  return(
    <div>

  FOUND from './components/NotFOUND'

   pp(){
    (
      iv>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<about/>}/>
    <Route path="/contact" element={<contact/>}/>
    <Route path="*" element={<NOTFOUND/>}
    </Routes>
    </BrowserRouter>

    )
}

export default App
