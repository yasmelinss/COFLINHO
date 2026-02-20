import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Historico from "./pages/Historico";
import Metas from "./pages/Metas";
import Perfil from "./pages/Perfil";

const appWindow = getCurrentWindow();

function App() {
  // Estado para controlar o dinheiro no cofre
  const [saldo, setSaldo] = useState<number>(0);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 1. BARRA DE TÍTULO CUSTOMIZADA */}
        <div data-tauri-drag-region className="titlebar">
          <div className="titlebar-label">Coflinho 🐷</div>
          <div className="titlebar-actions">
            <button className="titlebar-button" onClick={() => appWindow.minimize()}>
              ─
            </button>
            <button className="titlebar-button" onClick={() => appWindow.toggleMaximize()}>
              ▢
            </button>
            <button className="titlebar-button exit" onClick={() => appWindow.close()}>
              ✕
            </button>
          </div>
        </div>


        {/* 2. NAVEGAÇÃO */}
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/historico">Histórico</Link>
          <Link to="/metas">Metas</Link>
          <Link to="/perfil">Perfillllllll</Link>
          {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        </nav>

        {/* 2. CONTEÚDO DO APLICATIVO */}


        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/metas" element={<Metas />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

