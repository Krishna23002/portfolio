import React from 'react'

const Contact = () => {
    return (
        <div className="contact-section" id='contact'>
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, please fill out the form below or reach me through social media.</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send</button>
            </form>

            <div class="social-icons">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>


        </div>
    )
}

export default Contact
