import { faArrowRight, faGraduationCap, faLocationCrosshairs, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ContactPage() {
  return (
    <>
      <Header/>

      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='w-100 bg-success mt-5'>
            <div className="d-flex align-item-center justify-content-center pt-5" style={{ marginTop: "60px" }}>
              <h3 className='mb-3 fs-1'>Contact Us</h3>
            </div>
            <div className="d-flex align-item-center justify-content-center mb-5">
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, dolore nisi aspernatur fugiat facere ducimus eos.</p>
            </div>
          </div>
        </div>

        {/* Address and Testimonials */}
        <div className="row mt-5 px-5">

          {/* Left Side - Get In Touch */}
          <div className="col-md-6 mt-5">

            <div>
              <div className='d-flex flex-column align-items-center text-center'>
                <h2 className="fw-bold">Get In Touch</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              

              {/* Address */}
              <div className="d-flex mb-2" style={{marginLeft:'100px'}}>
                <FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#63E6BE" }} size="2x" />
                <h4 className="fw-bold ms-2 mb-0">Address</h4>
              </div>
              <p className="mb-4" style={{marginLeft:'100px'}}>NYC 4567, PO Berlin</p>

              {/* Phone */}
              <div className="d-flex mb-2" style={{marginLeft:'100px'}}>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#63E6BE" }} size="2x" />
                <h4 className="fw-bold ms-2 mb-0">Phone</h4>
              </div>
              <p className="mb-4" style={{marginLeft:'100px'}}>9086754321</p>

              {/* Email */}
              <div className="d-flex mb-2" style={{marginLeft:'100px'}}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#63E6BE" }} size="2x" />
                <h4 className="fw-bold ms-2 mb-0">Email</h4>
              </div>
              <p className="mb-4" style={{marginLeft:'100px'}}>mail</p>
            </div>

            <hr className="w-100 my-4" />

            {/* Follow Us */}
            <div  style={{marginLeft:'100px'}}>
              <h4 className="fw-bold">Follow Us</h4>
              <div className="d-flex gap-3 mt-3">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#63E6BE" }} size='2x' />
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#63E6BE" }} size='2x' />
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#63E6BE" }} size='2x' />
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#63E6BE" }} size='2x' />
              </div>
            </div>

          </div>

          {/* Right Side - Client Testimony Form */}
          <div className="col-md-6 d-flex justify-content-center mt-5">
            <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
              <h3 className="text-center fw-bold mb-4">Client Testimony</h3>

              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                </div>
                <p className="text-center small text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center px-5 mt-5">
            <iframe
              title="Ernakulam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125922.91619136745!2d76.34144805!3d9.50080315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884f1aa296b61%3A0xb84764552c41f85a!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1757487984359!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>



      </div>

      <Footer />

    </>
  )
}

export default ContactPage