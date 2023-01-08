import React, { useState, useEffect } from 'react';
import './StudentList.scss';
import { Container, Table } from 'react-bootstrap';
import { FaSortUp, FaSortDown, FaSortAlphaUpAlt, FaSortAlphaDown } from "react-icons/fa";
import data from '../../data/data.json'; //will be connected to mongo DB in the future  
import { useSelector, useDispatch } from 'react-redux';
import { sortAsc, sortDesc, getAllStudent } from '../../action/Action';
import rootReducer from '../../reduer';
import StudentModal from '../studentModal/StudentModal';

const StudentList = () => {

  //redux
  const studentList = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  //private state
  const [sortOrder, setSortOrder] = useState('asc');
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState(0);

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
        {studentList.lengh !== 0 &&
          <>
            <Table striped bordered hover className='studentTable'>
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
                    <tr key={index} onClick={() => openDetail(elem.id)}>
                      <td>{elem.id}</td>
                      <td>{elem.name}</td>
                      <td>{elem.kana}</td>
                      <td>{elem.class}</td>
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