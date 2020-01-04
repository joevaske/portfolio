import React, { Component } from 'react';
export default class Resumes extends Component {
 
  render() {
   
    return (
      
        <section
        className="content-section bg-primary text-white text-center"
        id="resumes"
      >
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Resumes</h3>
            <h2 className="mb-5">Biography and Work History</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-screen-smartphone"></i>
              </span>
              <h4>
                <strong>Web Developer & Graphic Designer</strong>
              </h4>
              <p className="text-faded mb-0">13+ years Designing and Coding</p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-pencil"></i>
              </span>
              <h4>
                <strong>IT Business Analyst</strong>
              </h4>
              <p className="text-faded mb-0">
                8+ years of Software Development
              </p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5 mb-md-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-like"></i>
              </span>
              <h4>
                <strong>Martial Arts Black Belt</strong>
              </h4>
              <p className="text-faded mb-0">
                30+ years in Martial Arts
                <i className="fas fa-heart"></i>
              </p>
            </div>
           
          </div>
        </div>
      </section>

    );
  }
}
