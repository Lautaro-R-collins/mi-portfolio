import React, { useState } from "react";
import './ContactForm.css';
import { Trans } from 'react-i18next';

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


  //action="https://formspree.io/f/xbjvppwk" method="POST"
  return (
    <div className="contact-form">
      <h2 className="section__title" > <Trans i18nKey="talks" components={[<span className="about__name" key="0" />]} /> </h2>
      <form  action="https://formsubmit.co/lautarodevelops@gmail.com" method="POST">
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
        <button type="submit">Enviar Mensaje</button>
        <input type="hidden" name="_next" value="https://lautaro-rodriguez.onrender.com/#contact" ></input>
        <input type="hidden" name="_captcha" value="false" ></input>
        <input type="hidden" name="_next" value="https://lautaro-rodriguez.onrender.com/#contact/thanks.html"></input>
      </form>
    </div>
  );
};

export default ContactForm;
