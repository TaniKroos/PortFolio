import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import ThemeTemplates from './components/ThemingTemplate/ThemeTemplates';

import './App.scss'

import {Home , About , Contact , Project,Error} from './pages'
const App = () => {
  return (
    <BrowserRouter>
     <Sidebar/>
     
     <ThemeTemplates/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}>

        </Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
      
        <Route path='*' element={<Error/>}></Route>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
