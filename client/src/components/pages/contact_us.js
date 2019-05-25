import React from 'react';

function ContactUs(props) {
    return (
        <div className="contact-us-container">   
            <h2 className="ContactUs">Contact Us</h2>
            <div className="contact-info">
                <b>Email: </b><a href="mailto:lauragreer3@gmail.com">lauragreer3@gmail.com</a>
                <b>Phone: </b><a href="tel:7202241478">720.224.1478</a>
            </div>
        </div>
    );
}

export default ContactUs;