import { IconeSetaBaixo, IconeSetaCima } from "../Icones";
import Tipografia from "../Tipografia";
import "./Acordeao.css";

interface AcordeaoTituloProps {
  titulo: string;
  estaAberto: boolean;
  id: string;
  alternarVisibilidade: (id: string | number) => void;
}

const AcordeaoTitulo = ({
  titulo,
  estaAberto,
  id,
  alternarVisibilidade,
}: AcordeaoTituloProps) => {
  return (
    <summary
      role="button"
      className="acordeao__titulo"
      aria-expanded={estaAberto}
      aria-controls={id}
      onClick={() => alternarVisibilidade(id)}
    >
      <Tipografia elemento="h2" variante="h3" cor="cinza">
        {titulo}
      </Tipografia>
      <span>{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </summary>
  );
};

export default AcordeaoTitulo;
