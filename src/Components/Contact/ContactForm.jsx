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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { t } = useTranslation();

  //action="https://formspree.io/f/xbjvppwk" method="POST"
  return (
    <div className="contact-form">
      <h2 className="section__title" > <Trans i18nKey="talks" components={[<span className="about__name" key="1" />]} /> </h2>
      <form  action="https://formsubmit.co/lautarodevelops@gmail.com" method="POST">
        <div className="form-group">
          <label htmlFor="name"><Trans i18nKey="name" components={[<span className="different" key="1" />]} /></label>
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
          <label htmlFor="email"><Trans i18nKey="mailt" components={[<span className="different" key="1" />]} /></label>
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
          <label htmlFor="message"><Trans i18nKey="massag" components={[<span className="different" key="1" />]} /></label>
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
        <button type="submit"> {t("sendm")} </button>
        <input type="hidden" name="_next" value="https://lautaro-rodriguez.onrender.com/#contact" ></input>
        <input type="hidden" name="_captcha" value="false" ></input>
        <input type="hidden" name="_next" value="https://lautaro-rodriguez.onrender.com/#contact/thanks.html"></input>
      </form>
    </div>
  );
};

export default ContactForm;
