import React, { Component } from 'react'
export default class Contact extends Component{
    render() {
      return (
        <div>
          <section className="site-section bg-light" id="section-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                    <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                  </div>
                </div>
                <div className="col-md-7 mb-5 mb-md-0">
                  <form action="mailto:andreasen28@gmail.com" className="site-form" method='POST'>
                    <h3 className="mb-5">Get In Touch</h3>
                    <div className="form-group">
                      <input type="text" className="form-control px-3 py-4" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control px-3 py-4" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control px-3 py-4" placeholder="Your Phone" />
                    </div>
                    <div className="form-group mb-5">
                      <textarea className="form-control px-3 py-4" cols={30} rows={10} placeholder="Write a Message" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary  px-4 py-3" defaultValue="Send Message" />
                    </div>
                  </form>
                </div>
                <div className="col-md-5 pl-md-5">
                  <h3 className="mb-5">My Contact Details</h3>
                  <ul className="site-contact-details">
                    <li>
                      <span className="text-uppercase">Email</span>
                      site@gmail.com
                    </li>
                    <li>
                      <span className="text-uppercase">Phone</span>
                      +30 976 1382 9921
                    </li>
                    <li>
                      <span className="text-uppercase">Fax</span>
                      +30 976 1382 9922
                    </li>
                    <li>
                      <span className="text-uppercase">Address</span>
                      San Francisco, CA <br />
                      4th Floor8 Lower  <br />
                      San Francisco street, M1 50F
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <footer className="site-footer">
            <div className="container">
              <div className="row mb-3">
                <div className="col-md-12 text-center">
                  <p>
                    <a href="#" className="social-item"><span className="icon-facebook2" /></a>
                    <a href="#" className="social-item"><span className="icon-twitter" /></a>
                    <a href="#" className="social-item"><span className="icon-instagram2" /></a>
                    <a href="#" className="social-item"><span className="icon-linkedin2" /></a>
                    <a href="#" className="social-item"><span className="icon-vimeo" /></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <p className="col-12 text-center">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright ©  All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  }