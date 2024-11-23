import React, { useState } from "react";
import './Feedback.css';

const Feedback = () => {
  const [dadosFeedback, setDadosFeedback] = useState({
    avaliacao: "",
    comentarios: ""
  });

  const [errosFormulario, setErrosFormulario] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFeedback({ ...dadosFeedback, [name]: value });
  };

  const handleAvaliacao = (valor) => {
    setDadosFeedback({ ...dadosFeedback, avaliacao: valor });
  };

  const validar = () => {
    let erros = {};

    if (!dadosFeedback.avaliacao) {
      erros.avaliacao = "A avaliação é obrigatória.";
    }

    if (!dadosFeedback.comentarios) {
      erros.comentarios = "Os comentários são obrigatórios.";
    }

    setErrosFormulario(erros);
    return Object.keys(erros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validar()) {
      try {
        const response = await fetch('http://localhost:3333/Feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nota: dadosFeedback.avaliacao, // Ajuste para o formato esperado pelo seu backend
            descricao: dadosFeedback.comentarios,
            // Você pode incluir o ID do usuário aqui, se necessário
          }),
        });

        if (response.ok) {
          console.log("Feedback enviado:", dadosFeedback);
          setEnviado(true);
          setDadosFeedback({ avaliacao: "", comentarios: "" }); // Resetar formulário
        } else {
          const errorData = await response.json();
          console.error("Erro ao enviar feedback:", errorData);
          setErrosFormulario({ geral: "Erro ao enviar feedback. Tente novamente mais tarde." });
        }
      } catch (error) {
        console.error("Erro de rede:", error);
        setErrosFormulario({ geral: "Erro de rede. Tente novamente mais tarde." });
      }
    }
  };

  return (
    <div className="Fundo-FeedBack">
      <div className="caixa-feedback">
        <h2>Deixe seu Feedback</h2>
        {enviado ? (
          <div className="nota-agradecimento">
            <p>Obrigado pelo seu feedback!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="formulario-feedback">
            <div className="grupo-avaliacao">
              <label className="label-avaliacao">Avaliação:</label>
              <div className="avaliacao-estrelas">
                {[1, 2, 3, 4, 5].map((estrela) => (
                  <span
                    key={estrela}
                    className={`icone-estrela ${dadosFeedback.avaliacao >= estrela ? "estrela-preenchida" : ""}`}
                    onClick={() => handleAvaliacao(estrela)}
                  >
                    ★
                  </span>
                ))}
              </div>
              {errosFormulario.avaliacao && <span className="mensagem-erro">{errosFormulario.avaliacao}</span>}
            </div>

            <div className="grupo-comentarios">
              <label className="label-comentarios">Comentários:</label>
              <textarea
                name="comentarios"
                value={dadosFeedback.comentarios}
                onChange={handleChange}
                className="textarea-comentarios"
                placeholder="Deixe seus comentários aqui..."
              />
              {errosFormulario.comentarios && <span className="mensagem-erro">{errosFormulario.comentarios}</span>}
            </div>

            {errosFormulario.geral && <span className="mensagem-erro">{errosFormulario.geral}</span>}
            
            <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      )}
    </div>
  </div>
  );
};

export default Feedback;
