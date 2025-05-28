import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Cadastrar } from './pages/Cadastrar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default App;