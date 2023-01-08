import React from 'react';
import './Header.scss';

const Header = (props) => {

  return (
    <header className={`${props.menuItem }`}>
      {props.menuItem} List
    </header>

  );
};

export default Header;