import { ChangeEvent } from "react";
import "./BotaoRadio.css";

interface BotaoRadioProps {
  id: string;
  nome: string;
  valor: string;
  selecionado: boolean;
  aoMudar: (e: ChangeEvent) => void;
  textoLegenda: string;
}

const BotaoRadio = ({
  id,
  nome,
  aoMudar,
  selecionado,
  textoLegenda,
  valor,
}: BotaoRadioProps) => {
  return (
    <li>
      <label htmlFor={id} className="botao__radio--legenda">
        <input
          type="radio"
          id={id}
          name={nome}
          value={valor}
          checked={selecionado}
          onChange={aoMudar}
        />
        <span>{textoLegenda}</span>
      </label>
    </li>
  );
};

export default BotaoRadio;
