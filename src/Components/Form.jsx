import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errorMessage || successMessage) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const validate = () => {
    if (!formData.name.trim() || formData.name.trim().length < 5) {
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setErrorMessage("Por favor verifique su información nuevamente.");
      setSuccessMessage("");
    } else {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`);
      setErrorMessage("");
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>
      <button type="submit">Enviar</button>
      <div className="message error">{errorMessage}</div>
      <div className="message success">{successMessage}</div>
    </form>
  );
};

export default Form;


