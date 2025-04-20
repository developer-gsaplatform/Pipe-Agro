import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Galeria from './Pages/Galeria';
import Contato from './Pages/Contato';
import HomePage from './Pages/PipeAgroContent';
import Produtos from './Pages/Produtos';
import Servicos from './Pages/Servicos';
import Sobre from './Pages/Sobre';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/servicos" element={<Servicos/>} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;