import React from 'react';
import {Link} from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>Quem somos</h1>
      <p>Em nosso trabalho, priorizamos o contato entre...</p>
      <Link to="/" activeClassName="active">Página Inicial</Link>
    </div>
  );
};

export default AboutPage;
