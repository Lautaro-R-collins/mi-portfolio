import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor o realizar alguna acción.
    console.log(formData); // Solo imprime los datos en la consola por ahora
  };

  return (
    <div className="contact-form">
      <h2>Hablemos!</h2>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/lautarodevelops@gmail.com" method="POST">
        <div className="form-group">
          <label htmlFor="name">Nombre :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ingrese su nombre...*" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Ingrese su Mail...*" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Ingrese su mensaje...*" 
          ></textarea>
        </div>
        <button name="submit" type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
