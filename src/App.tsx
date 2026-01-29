import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./App.css";


const appWindow = getCurrentWindow();

function App() {
  // Estado para controlar o dinheiro no cofre
  const [saldo, setSaldo] = useState<number>(0);

  return (
    <div className="app-container">
      {/* 1. BARRA DE TÍTULO CUSTOMIZADA */}
      <nav data-tauri-drag-region className="titlebar">
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
      </nav>

      {/* 2. CONTEÚDO DO APLICATIVO */}


      <main className="content">
        <div className="balanço-patrimonial">
          <h1>Salvo no mês</h1>
          <h2>R$ X</h2>
          <p> Você está a X% de alcançar sua meta</p>
          <img src="src-tauri/icons/128x128@2x.png" alt="Piggy bank" />
        </div>

        <div className="ações">
          <button onClick={() => +1}>
            Novo Ganho
          </button>
          <button>
            Novo Gasto
          </button>
        </div>




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
  );
}

export default App;