import React, { Component } from 'react'
export default class Home extends Component{
    render() {
      return (
  
        <section className="site-hero" style={{backgroundImage: 'url(images/portland.jpg)'}} id="section-home" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row intro-text align-items-center justify-content-center">
              <div className="col-md-10 text-center">
                <h1 className="site-heading site-animate">Hey there! I'm <strong>Richard</strong></h1>
                <p className="lead site-subheading mb-4 site-animate">A Mortgage Loan Specialist Working at Mr. Cooper and Recent Coding Dojo Graduate</p>
                <p><a href="#section-about" className="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }