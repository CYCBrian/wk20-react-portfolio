import { useState } from "react";
import { validateEmail } from "../../util/helpers/validation";
import emailLogo from "../../assets/link-icons/email-svgrepo-com.svg"
import phoneLogo from "../../assets/link-icons/phone-svgrepo-com.svg"
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
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
    } else if (!message) {
      setErrorMessage("Please don't leave the message blank.");
      return;
    }
    setErrorMessage("");
    alert("Thanks for reaching out!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-container">
      <h2>Contact me!</h2>
      <section className="my-contact-container">
        <ul className="contact-list">
          <li className="contact-item">
            <img className="contact-logo" src={emailLogo} alt="Email logo" />
            <p className="my-contact">
              notgivingoutmyemailinanassignment@gmail.com
            </p>
          </li>
          <li className="contact-item">
            <img className="contact-logo" src={phoneLogo} alt="Phone logo" />
            <p className="my-contact">
              657-111-1111
            </p>
          </li>
        </ul>
      </section>

      <section className="contact-half">
        <h2>Or send me a message!</h2>
        <form className="contact-form" onSubmit={handleFormSubmit}>
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
                type="text"
                placeholder="Email"
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
