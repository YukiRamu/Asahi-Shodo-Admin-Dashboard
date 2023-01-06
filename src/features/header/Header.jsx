import React from 'react';
import './Header.scss';

const Header = (props) => {

  return (
    <header>
      {props.menuItem} List
    </header>
  );
};

export default Header;