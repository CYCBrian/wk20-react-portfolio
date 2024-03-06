import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for contacting me!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <h3>Let's chat!</h3>
      <form className="contactForm" onSubmit={handleFormSubmit}>
        <section>
          <label htmlFor="name">Your Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
        </section>
        <section>
          <label htmlFor="email">Your email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
          />
        </section>
        <section>
          <label htmlFor="message">Your message:</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
          ></textarea>
        </section>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
