/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { validateEmail } from "../../util/helpers/validation";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      alert("Please enter your name.");
      return;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    } else if (!message) {
      alert("Please don't leave the message blank.");
      return;
    }
    alert("Thanks for reaching out!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-container">
      <h2>Contact me!</h2>
      <section className="my-contact-container">
          <p className="my-contact">Email: not_giving_you_my_email_on_an_assignment@gmail.com</p>
          <p className="my-contact">Number: 657-111-1111</p>
      </section>
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
        <section className="button-container">
          <button type="submit">Submit</button>
        </section>
      </form>
    </section>
  );
}

export default Contact;
