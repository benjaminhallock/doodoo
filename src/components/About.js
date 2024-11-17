import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <h2 className="my-4">About</h2>
      <p className="lead">Welcome to the About page!</p>
      <p className="lead">Our application aims to provide the best services to our users. We are constantly working to improve and add new features.</p>
      <p className="lead">Feel free to contact us if you have any questions or feedback.</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">Building amazing web applications with React.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Team</h5>
              <p className="card-text">Dedicated developers working together.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">Get in touch with us anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;