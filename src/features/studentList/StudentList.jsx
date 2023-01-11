﻿import React, { useState, useEffect } from 'react';
import './StudentList.scss';
import { Container, Table } from 'react-bootstrap';
import { FaSortUp, FaSortDown, FaSortAlphaUpAlt, FaSortAlphaDown } from "react-icons/fa";
import data from '../../data/data.json'; //will be connected to mongo DB in the future  
import { useSelector, useDispatch } from 'react-redux';
import { sortAsc, sortDesc, getAllStudent } from '../../action/Action';
import rootReducer from '../../reduer';
import StudentModal from '../studentModal/StudentModal';
import { getData } from '../../data/StudentData';

const StudentList = () => {

  //redux
  const studentData = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  console.log('data is ready', studentData);

  //private state
  const [sortOrder, setSortOrder] = useState('asc');
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState(0);
  // const [data, setData] = useState({
  //   name: "",
  //   age: "",
  //   email: "",
  //   gender: "",
  //   location: "",
  //   picture: "",
  // });

  //When the component is first mounted
  useEffect(() => {
    (async () => {
      const fetchedData = await getData();
      if (fetchedData.length !== 0) {
        const DT = fetchedData.map(elem => ({
          name: elem.name.first + ` ` + elem.name.last,
          age: elem.dob.age,
          email: elem.email,
          gender: elem.gender,
          location: elem.location.country,
          picture: elem.picture.large,
        }));
        dispatch(getAllStudent(DT));
      }
    })();
  }, []);


  //method
  const sortStudentList = (order, item) => {
    const nameList = studentData.studentList.map(elem => elem.name.first + ` ` + elem.name.last);
    const locationList = studentData.studentList.map(elem => elem.location.country);

    if (order === 'desc') {
      setSortOrder("asc");
      dispatch(sortDesc(item));
    } else if (order === 'asc') {
      setSortOrder("desc");
      dispatch(sortAsc(item));
    }
  };

  const openDetail = (id) => {
    setShow(true);
    setStudentId(id);
  };

  //close modal
  const handleClose = () => setShow(false);

  return (
    <>
      <Container className='studentListContainer'>
        {studentData.studentList.lengh !== 0 &&
          <>
            <Table striped bordered hover className='studentTable'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name {sortOrder === 'asc' ?
                    <FaSortAlphaDown onClick={() => sortStudentList('asc', 'name')} /> :
                    <FaSortAlphaUpAlt onClick={() => sortStudentList('desc', 'name')} />}</th>
                  <th>Gender</th>
                  <th>Location {sortOrder === 'asc' ?
                    <FaSortAlphaDown onClick={() => sortStudentList('asc', 'location')} /> :
                    <FaSortAlphaDown onClick={() => sortStudentList('desc', 'location')} />}</th>
                </tr>
              </thead>
              <tbody>
                {
                  studentData.studentList.map((elem, index) => (
                    <tr key={index} onClick={() => openDetail(elem.id)}>
                      <td className='studentId'>{index + 1}</td>
                      <td className='studentData'>{elem.name} {`(${elem.age})`}</td>
                      <td className='studentData'>{elem.gender}</td>
                      <td className='studentData'>{elem.location}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            {/* Student Detail Modal */}
            <StudentModal
              show={show}
              id={studentId}
              handleClose={handleClose} />
          </>
        }
      </Container>
    </>
  );
};

export default StudentList;