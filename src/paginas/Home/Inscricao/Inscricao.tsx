import "./Inscricao.css";
import Botao from "@/componentes/Botao";
import CampoDigitacao from "@/componentes/CampoDigitacao";
import Tipografia from "@/componentes/Tipografia";
import { ChangeEvent, FormEvent, useId, useRef, useState } from "react";

const Inscricao = () => {
  const campoDigitacaoId = useId();
  const campoDigitacaoRef = useRef<HTMLInputElement | null>(null);
  const [erro, setErro] = useState("");
  const [valorCampo, setValorCampo] = useState("");

  const validaCampo = () => {
    if (campoDigitacaoRef.current) {
      const valorDoCampo = campoDigitacaoRef.current.value;

      if (valorDoCampo.length < 5) {
        setErro("O campo deve ter pelo menos 5 caracteres");
        campoDigitacaoRef.current.focus();
      } else {
        setErro("");
      }
    }
  };

  const aoMudarCampo = (event: ChangeEvent<HTMLInputElement>) => {
    setValorCampo(event.target.value);
    validaCampo();
  };

  const aoSubmeterForm = (event: FormEvent) => {
    event.preventDefault();
    validaCampo();
    if (!erro) {
      setValorCampo("");
    }
  };

  return (
    <section className="secao__inscricao">
      <div className="secao__inscricao--conteudo">
        <Tipografia elemento="h2" variante="h2" cor="azul">
          Inscreva-se para ganhar descontos!
        </Tipografia>
        <Tipografia elemento="p" variante="corpo" cor="azul">
          Cadastre seu email em nossa newsletter e saiba dos descontos, cupons e
          novidades em primeira mão!
        </Tipografia>
        <form
          noValidate
          className="secao__inscricao--formulario"
          onSubmit={aoSubmeterForm}
        >
          <CampoDigitacao
            id={campoDigitacaoId}
            type="email"
            name="inscricao"
            placeholder="Digite seu melhor endereço de email"
            ref={campoDigitacaoRef}
            style={{ width: "650px" }}
            onChange={aoMudarCampo}
            erro={erro}
          />
          <Botao variante="primario" type="submit">
            Inscrever
          </Botao>
        </form>
      </div>
    </section>
  );
};

export default Inscricao;
