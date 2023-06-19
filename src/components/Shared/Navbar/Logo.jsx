import React from 'react';
import logoImg from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
      <div>
        <Link to="/">
          <img src={logoImg} alt="logo" className='hidden md:block' width="100" height="100" />
        </Link>
      </div>
    );
};

export default Logo;