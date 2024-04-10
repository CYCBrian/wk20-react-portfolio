import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import { validateEmail } from "../../util/helpers/validation";
import emailLogo from "../../assets/link-icons/email-svgrepo-com.svg"
import phoneLogo from "../../assets/link-icons/phone-svgrepo-com.svg"
import "./contact.css";

function Contact() {
  const form = useRef()
  const [isVisible, setIsVisable] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() =>{
    setIsVisable(true)
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!subject){
      setErrorMessage("Please include a subject.");
      return;
    } else if (!message) {
      setErrorMessage("Please don't leave the message blank.");
      return;
    }
    emailjs
    .sendForm('service_9treej4', 'template_qh5iwco', form.current, {
      publicKey: 'BMI18W09OoL97j4Qt',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    setErrorMessage("");
    alert("Thanks for reaching out!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className={`contact-container ${isVisible ? 'visible' : ''}`}>
      <h2>Hit me up!</h2>
      <section className="my-contact-container">
        <ul className="contact-list">
          <li className="contact-item">
            <img className="contact-logo" src={emailLogo} alt="Email logo" />
            <p className="my-contact">
              briancyc93@gmail.com
            </p>
          </li>
          <li className="contact-item">
            <img className="contact-logo" src={phoneLogo} alt="Phone logo" />
            <p className="my-contact">
              647-523-3869
            </p>
          </li>
        </ul>
      </section>

      <section className="contact-half">
        <h2>Or send me a message!</h2>
        <form className="contact-form" ref={form} onSubmit={handleFormSubmit}>
          <section className="form-container">
            <section className="contact-information">
              <input
                className="contact-input"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
              />
              <input
                className="contact-input"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
              />
                <input
                className="contact-input"
                value={subject}
                name="subject"
                onChange={handleInputChange}
                type="text"
                placeholder="Subject"
              />
            </section>
            <section className="message-container">
              <textarea
                className="message-input"
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
              />
            </section>
          </section>
          {errorMessage && (
            <section>
              <p className="contact-warning">{errorMessage}</p>
            </section>
          )}
          <section className="button-container">
            <button type="submit">Submit</button>
          </section>
        </form>
      </section>
    </section>
  );
}

export default Contact;
