import { useState } from "react";
import Checkbox from "@/componentes/Checkbox/Checkbox";

const Garantia = () => {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <Checkbox
      id="checkbox-quantidade"
      nome="selecionar-quantidade"
      selecionado={selecionado}
      aoSelecionar={() => setSelecionado((prev) => !prev)}
      legenda="Quero seguro extra por 12 meses"
    />
  );
};

export default Garantia;
