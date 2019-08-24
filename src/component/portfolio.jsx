import React, { Component } from 'react'
export default class Portfolio extends Component{
    render() {
      return (
  
        <section className="site-section" id="section-portfolio">
          <div className="container">
            <div className="row">
              <div className="section-heading text-center col-md-12">
                <h2>Featured <strong>Portfolio</strong></h2>
              </div>
            </div>
            <div className="filters">
              <ul>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".packaging">Coming Soon</li>
                <li data-filter=".mockup">Coming Soon</li>
                <li data-filter=".typography">Coming Soon</li>
                <li data-filter=".photography">Coming Soon</li>
              </ul>
            </div>
            <div className="filters-content">
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p1.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a>                                  
                  </div>
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>                                         
                </div>
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p2.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a>                                  
                  </div>
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>                                         
                </div>                            
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p3.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a> 
                  </div>
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p4.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a>                                
                  </div> 
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p5.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a>                                
                  </div>
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src="images/comingsoon.png" alt="" />
                    </div>
                    <a href="images/p6.jpg" className="img-pop-up">  
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
                      </div>
                    </a>                                
                  </div>
                  <div className="p-inner">
                    <h4>Coming Soon</h4>
                    <div className="cat">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }