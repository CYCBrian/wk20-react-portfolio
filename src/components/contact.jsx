import {useState} from 'react';

function Contact(){

    return(
        <section>
            <h3>
                Let's chat!
            </h3>
            <form className="contactForm" onSubmit={handleFormSubmit}>
                <section>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        value={contactName}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                    />
                </section>
                <section>
                    <label htmlFor="email">Your email:</label>
                    <input
                        value={contactEmail}
                        name="email"
                        onChange={handleInputChange} 
                        type="text" 
                    />
                </section>
                <section>
                    <label htmlFor="message">Your message:</label>
                    <input
                        value={contactMessage}
                        name="message"
                        onChange={handleInputChange} 
                        type="text" 
                    />
                </section>
                <button onClick={handleForSubmit}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact