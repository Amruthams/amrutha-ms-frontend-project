import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-left">
                <h2>Feel free to connect with us !</h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                </div>
                <div className="contact-info">
                    <p><i className="fas fa-phone"></i> 0972 663 633</p>
                    <p><i className="fas fa-envelope"></i> hello@wefo.com</p>
                </div>
            </div>

            <div className="contact-right">
                <form>
                    <div className="form-group">
                        <label>Name <span>*</span></label>
                        <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label>Email <span>*</span></label>
                        <input type="email" placeholder="Your email address" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Write your message here..." required></textarea>
                    </div>
                    <div className='buttonsend'>
                        <button type="submit" className="send-button">Send <span><img className='arrow' src="https://i.postimg.cc/sXkXf45y/up-right-arrow.png" alt="" /></span></button></div>
                </form>
            </div>


            
        </div>
    )
}

export default Contact
