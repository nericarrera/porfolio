
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    names: "",
    phone: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos a Formspree o backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="names"
        onChange={handleChange}
        value={formData.names}
        required
      />
      {/* Resto de campos */}
    </form>
);

};

export default Contact;