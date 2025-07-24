import React from 'react';
import './App.css'
import {  Route, Routes } from 'react-router-dom';

import Inicio from './Inicio';
import Vip from './Vip';



  const App =  () => {
    



  return (
   
    
    <>
      <Routes>
      <Route path="/" element={<Inicio></Inicio>}/>
        {/* Ruta con slugs dinámicos */}
      <Route path="/:segmento1/:segmento2/:segmento3" element={<Inicio />} />
      <Route path="/:segmento1/:segmento2/:segmento3/:vip" element={<Vip/>} />
      </Routes>

      
    
</>
  );
}

export default App;