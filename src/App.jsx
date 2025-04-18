import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PipeAgroContent from './Pages/PipeAgroContent';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PipeAgroContent />} />
          {/* Add more routes here as needed */}
          {/* <Route path="/produtos" element={<Produtos />} /> */}
          {/* <Route path="/servicos" element={<Servicos />} /> */}
          {/* <Route path="/galeria" element={<Galeria />} /> */}
          {/* <Route path="/contato" element={<Contato />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;