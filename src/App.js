import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login/login';
import Menu from './component/menu/menu';
import Dashboard from './component/dashboard/dashbord';
//import Formulario from './component/formulario/formulario';
import Evaluacion from './component/formulario/evaluacion';

function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
      </Routes>
    </Router>
    
  );
}

export default App;