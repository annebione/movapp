import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';

const Header = ({loading, signOut, auth, user}) => {

  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  let adminLink = user.isAdmin ? <AdminLink /> : null;

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Página Inicial</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">Quem somos</Link>
      {" | "}
      <Link to="/protected" activeClassName="active">Protegido</Link>
      {adminLink}
      {" | "}
      {loginLogoutLink}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
