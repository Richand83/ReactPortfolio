import React, { Component } from 'react'
export default class About extends Component {
    render() {
      return (
        <div>
          <section className="site-section" id="section-about">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                  <img src="images/personal2.jpg" alt="placeholder" className="img-fluid" />
                </div>
                <div className="col-lg-5 pl-lg-5">
                  <div className="section-heading">
                    <h2>About <strong>Me</strong></h2>
                  </div>
                  <p className="lead">I am a Mortgage servicing specialist in a highly adaptive role, I have a passion for helping people understand their true potential and I also have an affinity for knowledge.</p>
                  <p className="mb-5  ">I’ve learned multiple different programming languages, resulting in a Full Stack accreditation from Coding Dojo.  Which include Application development, UX/UI Design, Algorithms, Object-oriented design, and the ability to pick up new technologies quickly and implement them immediately. I come from a wide range background of different industries including mechanics, customer service, external & internal clientele, as well as project based teams and working with non-profit organizations.</p>
                  <p>
                    <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                    <a href="images/untitled document.pdf" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-3 mb-3">
                  <div className="section-heading">
                    <h2>Technical <strong>Skills</strong></h2>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="skill">
                    <h3>Python</h3>
                  </div>
                  <div className="skill">
                    <h3>JavaScript (ES5,ES6,ReactJS,JQuery)</h3>
                  </div>
                  <div className="skill">
                    <h3>CSS3 (BOOTSTRAP) </h3>
                  </div>
                  <div className="skill">
                    <h3>Flask/Django/Angular</h3>
                    {/* <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                        <span>88%</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="skill">
                    <h3>Tools: AWS EC2, Github, VS Code, & MySQL Workbench.</h3>
                    {/* <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                        <span>88%</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="site-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="section-heading text-center">
                    <h2>Client <strong>Testimonial</strong></h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="block-47 d-flex mb-5">
                    <div className="block-47-image">
                      <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid" />
                    </div>
                    <blockquote className="block-47-quote">
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                      <cite className="block-47-quote-author">— Ethan McCown, CEO <a href="#">XYZ Inc.</a></cite>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block-47 d-flex mb-5">
                    <div className="block-47-image">
                      <img src="images/person_2.jpg" alt="Image placeholder" className="img-fluid" />
                    </div>
                    <blockquote className="block-47-quote">
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                      <cite className="block-47-quote-author">— Craig Gowen, CEO <a href="#">XYZ Inc.</a></cite>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block-47 d-flex mb-5">
                    <div className="block-47-image">
                      <img src="images/person_3.jpg" alt="Image placeholder" className="img-fluid" />
                    </div>
                    <blockquote className="block-47-quote">
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                      <cite className="block-47-quote-author">— Ethan McCown, CEO <a href="#">XYZ Inc.</a></cite>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block-47 d-flex mb-5">
                    <div className="block-47-image">
                      <img src="images/person_4.jpg" alt="Image placeholder" className="img-fluid" />
                    </div>
                    <blockquote className="block-47-quote">
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                      <cite className="block-47-quote-author">— Craig Gowen, CEO <a href="#">XYZ Inc.</a></cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      );
    }
  }