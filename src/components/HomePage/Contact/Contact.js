import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_wq4idsh', e.target, 'user_FLxWANa8l53m6Hz9CwPp9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <section className="contact-section" id="contact">
            <div className="position-relative mb-5">
                <h1 className="text-center fw-bold section-title">Contact</h1>
                <div className="border-style-container">
                    <span className="border-style"></span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    <p className="text-center text-white mb-5 fw-bold">If you want to hire me then give me a message.</p>
                    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                        <div className="w-50">
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" name="name" />
                            </div>
                            <div class="mb-4">
                                <input type="text" className="form-control p-3" id="exampleInputPassword1" placeholder="Enter Your Email" name="email" />
                            </div>
                            <div class="mb-4">
                                <input type="text" className="form-control p-3" id="exampleInputPassword1" placeholder="Enter Subject" name="subject" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} name="message"></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <button type="submit" className="button-brand mt-5">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;