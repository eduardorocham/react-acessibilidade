import "./Checkbox.css";

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  legenda: string;
  nome: string;
  selecionado: boolean;
  aoSelecionar: () => void;
}

const Checkbox = ({
  id,
  nome,
  legenda,
  selecionado,
  aoSelecionar,
  ...rest
}: CheckboxProps) => {
  return (
    <label htmlFor={id} className="checkbox_legenda">
      <input
        type="checkbox"
        id={id}
        name={nome}
        checked={selecionado}
        onChange={aoSelecionar}
        {...rest}
      />
      <span>{legenda}</span>
    </label>
  );
};

export default Checkbox;
