import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>MoveApp</h1>
      <p>  r</p>
      <Link to="about" className="btn btn-primary btn-lg">Quem somos</Link>
    </div>
  );
};

export default HomePage;
