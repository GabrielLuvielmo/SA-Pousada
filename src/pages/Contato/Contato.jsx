import React, { useState } from 'react';
import './Contato.css';
import { Link } from 'react-router-dom';


const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulário enviado:", formData);
    }
  };

  return (
    <div>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>

        <div>
          <label>Mensagem:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && <span>{formErrors.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;