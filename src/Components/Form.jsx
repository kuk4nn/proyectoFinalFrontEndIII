import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error general
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Limpia el mensaje de error al modificar campos
    setSuccessMessage(""); // Limpia el mensaje de éxito al modificar campos
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
      setSuccessMessage(""); // Limpia cualquier mensaje de éxito previo
    } else {
      setErrorMessage(""); // Limpia el mensaje de error
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`
      );
      setFormData({ name: "", email: "" }); // Limpia los campos del formulario
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
      <button type="submit">Send</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Form;

