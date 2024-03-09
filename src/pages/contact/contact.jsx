/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { validateEmail } from "../../util/helpers/validation";
import "./contact.css"

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
    <section>
      <h3>Let's chat!</h3>
      <form className="contactForm" onSubmit={handleFormSubmit}>
        <section>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </section>
        <section>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
        </section>
        <section>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
