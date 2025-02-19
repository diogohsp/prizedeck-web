import { useState } from "react";
import Slot from "react-slot-machine";

const list = ["teste1", "teste2", "teste3"];

export const SlotMachine = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [target, setTarget] = useState(0); // O target é o valor para onde a roleta vai

  const startSpin = () => {
    setIsSpinning(true);

    // Escolhe um novo item aleatório da lista
    const randomTarget = Math.floor(Math.random() * list.length);

    // Atualiza o target
    setTarget(randomTarget);

    setTimeout(() => {
      setIsSpinning(false); // Para o giro após 2 segundos
    }, 2000);
  };

  return (
    <div>
      <p>Oi! Vamos girar a roleta?</p>
      <button onClick={startSpin} disabled={isSpinning}>
        {isSpinning ? "Girando..." : "Girar"}
      </button>
      <Slot target={isSpinning ? 2 : 0} duration={2000} isSpinning={isSpinning}>
        {list.map((value, index) => (
          <div style={{ width: "100%", height: "100%" }} key={index}>
            {value}
          </div>
        ))}
      </Slot>
    </div>
  );
};
