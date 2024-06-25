import React, { useState } from "react";
import './ContactForm.css';
import { Trans } from 'react-i18next';
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (formData.name && formData.email && formData.message) {
      // Mostrar alerta de confirmación
      alert(t("Thanks for your message!"));
      
      // Enviar el formulario
      e.target.submit();
    } else {
      // Mostrar mensaje de error si faltan campos por llenar
      alert(t("pleaseFillAllFields"));
    }
  };

  return (
    <div className="contact-form">
      <h2 className="section__title">
        <Trans i18nKey="talks" components={[<span className="about__name" key="0" />]} />
      </h2>
      <form action="https://formsubmit.co/lautarodevelops@gmail.com" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <Trans i18nKey="name" components={[<span className="different" key="0" />]} />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("sendname")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <Trans i18nKey="mailt" components={[<span className="different" key="0" />]} />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("sende")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <Trans i18nKey="massag" components={[<span className="different" key="0" />]} />
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            placeholder={t("sendmes")}
          ></textarea>
        </div>
        <button type="submit">{t("sendm")}</button>
        <input type="hidden" name="_next" value="https://lautaro-rodriguez.onrender.com/"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
    </div>
  );
};

export default ContactForm;
