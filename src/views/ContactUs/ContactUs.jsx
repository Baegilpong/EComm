import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setIsSubmitting(true); // Set submitting state to true
        setMessage(null); // Clear previous messages

        const formData = new FormData(event.target); 
        const data = {
            Name: formData.get('Name'),
            Email: formData.get('Email'),
            Message: formData.get('Message'),
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    access_key: formData.get('access_key'),
                    ...data,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('Form submitted successfully. Thank you!');
                event.target.reset(); // Reset the form fields
            } else {
                throw new Error(result.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false); // Reset submitting state regardless of the outcome
        }
    };

    return (
        <div className="ContactUs-page">
        <div className="ContactUs-container">
            <h1>Contact us</h1>
            <h2>Give us your feedback</h2>
            <form onSubmit={handleSubmit} className="enter-section">
                <input type="hidden" name="access_key" value="a2efa853-d079-44a2-bdf6-bd4cdd803d0c"/>
                
                <label htmlFor="Name">Name</label>
                <input name="Name" placeholder="Your Name" className="Contactus-Input" required/>

                <label htmlFor="Email">Email</label>
                <input name="Email" placeholder="Your Email" className="Contactus-Input" required/>
                <label htmlFor="Message">Message</label>

                <input name="Message" placeholder="Give us your thoughts!" className="Contactus-Input" required/>  
                <button className="sub-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {message && <div className="feedback-message">{message}</div>}
        </div>
        </div>
    );
}

export default ContactUs;
