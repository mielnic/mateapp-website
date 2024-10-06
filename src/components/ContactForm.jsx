import React, { useState } from 'react';
import styles from '../styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContactForm() {

  const[t, i18n] = useTranslation("global")

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://contactos.mateapp.ar/directory/api/leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        navigate('/thankyou');
      } else {
        console.error('Failed to submit form data');
        navigate('/contacterror');
      }
      } catch (error) {
        console.error('An error occurred:', error);
        navigate('/contacterror');
      }
  };
  

  return (
    <section id='contact_form' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
    <div className='bg-grey-gradient rounded-[20px] py-10 px-20 box-shadow'>
      <p className={`${styles.heading2}`}>{t("contact.title")}</p>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-6 sm:min-w-[470px]'>
          <label htmlFor="firstName" className='block'> <span className='text-dimBlack font-poppins font-medium'>{t("contact.first_name")}</span>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`${styles.textInput}`}
            value={formData.firstName}
            onChange={handleInputChange}
            required
            />
            </label>
          <label htmlFor="lastName" className='block'> <span className='text-dimBlack font-poppins font-medium'>{t("contact.last_name")}</span>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`${styles.textInput}`}
            value={formData.lastName}
            onChange={handleInputChange}
            required
            />
            </label>
          <label htmlFor="email" className='block'><span className='text-dimBlack font-poppins font-medium'>{t("contact.email")}</span>
          <input
            type="email"
            id="email"
            name="email"
            className={`${styles.textInput}`}
            value={formData.email}
            onChange={handleInputChange}
            required
            />
            </label>

          <label htmlFor="message" className='block'><span className='text-dimBlack font-poppins font-medium'>{t("contact.message")}</span>
          <textarea
            type="textarea"
            id="message"
            name="message"
            className={`${styles.textInput}`}
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          />
          </label>
        </div>
        <button type="submit" className={`mt-4 py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>{t("contact.submit")}</button>
      </form>
    </div>
    </section>
  );
}

export default ContactForm;
