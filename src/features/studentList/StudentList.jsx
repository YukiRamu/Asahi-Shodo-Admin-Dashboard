import React, { useState, useEffect } from 'react';
import './StudentList.scss';
import { Container, Table } from 'react-bootstrap';
import { FaSortUp, FaSortDown, FaSortAlphaUpAlt, FaSortAlphaDown } from "react-icons/fa";
import data from '../../data/data.json'; //will be connected to mongo DB in the future  
import { useSelector, useDispatch } from 'react-redux';
import { sortAsc, sortDesc, getAllStudent } from '../../action/Action';
import rootReducer from '../../reduer';

const StudentList = () => {

  //redux
  const studentList = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  //private state
  // const [studentData, setStudentData] = useState(data.student);
  const [sortOrder, setSortOrder] = useState('asc');

  //When the component is first mounted
  useEffect(() => {
    dispatch(getAllStudent(data.student));
  }, []);

  //method
  const sortStudentList = (item, order) => {

    setSortOrder(order);
    if (order === 'desc') {
      dispatch(sortDesc(item));
    } else {
      dispatch(sortAsc(item));
    }

    //name sort ---- WITHOUT Redux
    // if (item === 'name') {
    //   if (order === 'desc') {
    //     setStudentData(studentData.sort((a, b) => b.name.localeCompare(a.name)));
    //   } else {
    //     setStudentData(studentData.sort((a, b) => a.name.localeCompare(b.name)));
    //   }
    // } else {
    //   //class sort
    //   if (order === 'desc') {

    //     setStudentData(studentData.sort((a, b) => classList.indexOf(b.class) > classList.indexOf(a.class) ? -1 : 1));
    //   } else {
    //     setStudentData(studentData.sort((a, b) => classList.indexOf(a.class) > classList.indexOf(b.class) ? -1 : 1));
    //   }
    // }

    
  };

  return (
    <>
      <Container>
        {studentList.lengh !== 0 &&
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name {sortOrder === 'asc' ?
                  <FaSortAlphaDown onClick={() => sortStudentList('name', 'desc')} /> :
                  <FaSortAlphaUpAlt onClick={() => sortStudentList('name', 'asc')} />}</th>
                <th>Kana</th>
                <th>Class {sortOrder === 'asc' ?
                  <FaSortDown onClick={() => sortStudentList('class', 'desc')} /> :
                  <FaSortUp onClick={() => sortStudentList('class', 'asc')} />}</th>
              </tr>
            </thead>
            <tbody>
              {
                studentList.map((elem, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{elem.name}</td>
                    <td>{elem.kana}</td>
                    <td>{elem.class}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        }
      </Container>
    </>
  );
};

export default StudentList;