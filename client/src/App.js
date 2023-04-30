import './App.css';

import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import CadLog from './routes/CadLog.routes';
import Cardapio from './routes/Cardapio.routes';
import Sobre from './routes/Sobre.routes';
import Layout from './routes/Layout.routes';
import User from './routes/User.routes';

function App() {

  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route element={<CadLog/>} path='CadLog'></Route>
          <Route element={<Cardapio/>} path='Cardapio'></Route>
          <Route element={<Sobre/>} path='Sobre'></Route>
          <Route element={<Layout/>} path='/'></Route>
        </Routes>        
      </BrowserRouter>
     
    </>
  );
}

export default App;
