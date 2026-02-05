import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Historico from "./pages/Historico";
import Metas from "./pages/Metas";

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
        </nav>

        {/* 2. CONTEÚDO DO APLICATIVO */}


        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/metas" element={<Metas />} />
          </Routes>


          <div className="balance-card">
            <p>Saldo total</p>
            <h1>R$ {saldo.toFixed(2)}</h1>""

            <div className="actions">
              <button onClick={() => setSaldo(saldo + 10)}>
                Depositar R$ 10
              </button>
              <button onClick={() => setSaldo(0)} className="reset-btn">
                Esvaziar Cofre
              </button>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;