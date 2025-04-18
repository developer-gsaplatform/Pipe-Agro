import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Galeria from './Pages/Galeria';
import Contato from './Pages/Contato';
import HomePage from './Pages/PipeAgroContent';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<h1 className='my-50'>Em desenvolvimento</h1>} />
          <Route path="/servicos" element={<h1 className='my-50'>Em desenvolvimento</h1>} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;