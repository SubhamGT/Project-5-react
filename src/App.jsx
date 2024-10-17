import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './page/Acceuil';
import A_Propos from './page/A_Propos';
import Red from './page/Red';
import FicheLogement from './page/FicheLogement'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil />} />
        <Route path='/A_Propos' element={<A_Propos />} />
        <Route path='*' element={<Red />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
