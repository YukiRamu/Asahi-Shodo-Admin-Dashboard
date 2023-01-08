import React from 'react';
import Menu from '../../features/menu/Menu';
import Header from '../../features/header/Header';
import TuitionList from '../../features/tuitionList/TuitionList';

const Tuition = () => {
  return (
    <>
      <Menu />
      <Header menuItem="Tuition" />
      <TuitionList />
    </>
  );
};

export default Tuition;;