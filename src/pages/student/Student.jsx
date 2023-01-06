import React from 'react';
import Menu from '../../features/menu/Menu';
import Header from '../../features/header/Header';
import StudentList from '../../features/studentList/StudentList';

const Student = () => {
  return (
    <>
      <Menu />
      <Header menuItem="Student" />
      <StudentList />
    </>
  );
};

export default Student;