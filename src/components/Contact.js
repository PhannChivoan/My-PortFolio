import React, { useState } from 'react';
import axios from 'axios';
function Contact(props) {
  const [name,SetName] = useState('');
  const [email,SetEmail] = useState('');
  const [subject,SetSubject] = useState('');
  const [message,SetMessage] = useState('');
  const [showmodal,SetShowModal] = useState(false);

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addmessage', {
        name,
        email,
        subject,
        message,
      });

      console.log('Message sent successfully!:', response.data);
      SetShowModal(true);

    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };
    return ( 
       <>
  {/* Contact Section */}
  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>
        Feel free to get in touch—I'm always open to discussing new projects or
        opportunities.
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-5">
          <div className="info-wrap">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>
                  N<sup>0</sup> 24 street 03, Kilometer 06, Phnom Penh,Cambodia
                </p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Me</h3>
                <p>+855 166 545 46</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Me</h3>
                <p>phannchivoan.biu@gmail.com</p>
              </div>
            </div>
            {/* End Info Item */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.9748138156788!2d104.9037713748182!3d11.625145188579989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953a591340267%3A0xbdf150bd7c65886!2sBorey%20New%20World%20KH6!5e0!3m2!1sen!2skh!4v1749395320247!5m2!1sen!2skh"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 270 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <form
            onSubmit={handleSubmit}
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <label htmlFor="name-field" className="pb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e)=>SetName(e.target.value)}
                  id="name-field"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email-field" className="pb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e)=>SetEmail(e.target.value)}
                  id="email-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="subject-field" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={subject}
                  onChange={(e)=>SetSubject(e.target.value)}
                  id="subject-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="message-field" className="pb-2">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={message}
                  onChange={(e)=>SetMessage(e.target.value)}
                  rows={10}
                  id="message-field"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  </section>
  {/* /Contact Section */}


  {/* Success Modal */}
  {showmodal && (
  <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Success</h5>
          <button type="button" className="btn-close" onClick={() => SetShowModal(false)}></button>
        </div>
        <div className="modal-body">
          <p>Your message has been sent successfully!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={() => SetShowModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</>

    );
}

export default Contact;