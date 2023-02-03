import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada/PaginaNaoEncontrada';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/usuarios">Lista de Usuários</NavLink></li>
              <li><NavLink to="/cadastro">Cadastro de Usuários</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/usuarios" element={<Usuarios />}/>
            <Route path="/usuarios/:id" element={<DetalhesUsuario/>}/>
            <Route path="/cadastro" element={<AdicionarUsuario />}/>
            <Route path="*" element={<PaginaNaoEncontrada />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
