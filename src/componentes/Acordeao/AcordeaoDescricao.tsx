import Tipografia from "../Tipografia";
import "./Acordeao.css";

interface AcordeaoDescricaoProps {
  id: string;
  descricao: string;
  estaAberto: boolean;
}

const AcordeaoDescricao = ({
  descricao,
  estaAberto,
  id,
}: AcordeaoDescricaoProps) => {
  return (
    <div id={id} hidden={!estaAberto} className="acordeao__descricao">
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        {descricao}
      </Tipografia>
    </div>
  );
};

export default AcordeaoDescricao;
