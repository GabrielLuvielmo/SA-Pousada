import React, { useState } from "react";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    rating: "",
    comments: ""
  });

  const [formErrors, setFormErrors] = useState({
    rating: "",
    comments: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!feedbackData.rating) {
      errors.rating = "A avaliação é obrigatória.";
    }

    if (!feedbackData.comments) {
      errors.comments = "Os comentários são obrigatórios.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Feedback enviado:", feedbackData);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Deixe seu Feedback</h2>
      {isSubmitted ? (
        <div>
          <p>Obrigado pelo seu feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Avaliação (1 a 5):</label>
            <select
              name="rating"
              value={feedbackData.rating}
              onChange={handleChange}
            >
              <option value="">Selecione uma avaliação</option>
              <option value="1">1 - Muito ruim</option>
              <option value="2">2 - Ruim</option>
              <option value="3">3 - Regular</option>
              <option value="4">4 - Bom</option>
              <option value="5">5 - Excelente</option>
            </select>
            {formErrors.rating && <span>{formErrors.rating}</span>}
          </div>

          <div>
            <label>Comentários:</label>
            <textarea
              name="comments"
              value={feedbackData.comments}
              onChange={handleChange}
            />
            {formErrors.comments && <span>{formErrors.comments}</span>}
          </div>

          <button type="submit">Enviar Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
