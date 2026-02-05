import { useState } from "react";

export default function Home() {
  const [saldo, setSaldo] = useState<number>(0);

  return (
    <div className="balanço-patrimonial">
      <h1>Salvo no mês</h1>
      <h2>R$ {saldo}</h2>
      <p>Você está a {saldo+1} de alcançar sua meta</p>
      <img src="src-tauri/icons/128x128@2x.png" alt="Piggy bank" />

      <div className="ações">
        <button className="buttomHome1" onClick={() => setSaldo(saldo + 1)}>
          Novo Ganho
        </button>
        <button className="buttomHome2" onClick={() => setSaldo(saldo - 1)}>
          Novo Gasto
        </button>
      </div>
      <div>
        <h2>Posso gastar: </h2>
      </div>
    </div>
  );
}
