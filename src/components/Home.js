import React from 'react';

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">This is a simple React Router application.</p>
      <hr className="my-4" />
      <p>Learn more about React Router and Bootstrap integration.</p>
      <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
    </div>
  );
}

export default Home;