import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Nome é obrigatório.";
    }

    if (!formData.email) {
      errors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido.";
    }

    if (!formData.message) {
      errors.message = "Mensagem é obrigatória.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setLoading(true);

    if (validate()) {
      // Simulate form submission
      setTimeout(() => {
        console.log("Formulário enviado:", formData);
        setSuccessMessage("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className='div-contato'>
      <h2 >Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className='campo-contato'>
          <label className="Contato-Label" htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome para Contato"
            value={formData.name}
            onChange={handleChange}
            className={formErrors.name ? 'erro' : ''}
          />
          {formErrors.name && <span className="erro">{formErrors.name}</span>}
        </div>

        <div className='campo-contato'>
          <label className="Contato-Label" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email para Contato"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? 'erro' : ''}
          />
          {formErrors.email && <span className="erro">{formErrors.email}</span>}
        </div>

        <div className='campo-contato'>
          <label className="Contato-Label" htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            placeholder="Digite aqui a sua mensagem..."
            value={formData.message}
            onChange={handleChange}
            className={formErrors.message ? 'erro' : ''}
          />
          {formErrors.message && <span className="erro">{formErrors.message}</span>}
        </div>

        <button type="submit" className='botao-contato' disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {successMessage && <div className="sucesso">{successMessage}</div>}
      </form>
    </div>
  );
};

export default Contato;
