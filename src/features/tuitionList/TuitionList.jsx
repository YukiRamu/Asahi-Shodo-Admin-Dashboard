import React, { useEffect } from 'react';
import './TuitionList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Row, Col } from 'react-bootstrap';
import data from '../../data/data.json'; //will be connected to mongo DB in the future  
import { getAllStudent, getAllTuition } from '../../action/Action';

const TuitionList = () => {

  //redux
  const studentData = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  console.log(studentData);

  //When the component is first mounted
  useEffect(() => {
    try {
      (async () => {
        const student = await fetch(data.student); //fetch json data
        const tuition = await fetch(data.tuition); // will rewrite with MongoDB
        if (!student.ok || !tuition.ok) {
          throw student.statusText, tuition.statusText;
        } else {
          dispatch(getAllStudent(data.student));
          dispatch(getAllTuition(data.tuition));
        }
      })();
    } catch (error) {
      console.error(`Failed to fetch student Data. Error= ${error}`);
    }
  }, []);

  //data
  const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nobemver', 'December'];

  return (
    <>
      {(studentData.studentList.length !== 0 &&studentData.tuitionList.length) &&
        <>
          <Table responsive className='tuitionTable'>
            <thead>
              <tr>
                <th>Name</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>{Month[index]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentData.studentList.map((elem, index) =>
                <>
                  <tr key={index}>
                    <td className='studentName'>{elem.name}</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td className='dateData' key={index}>{elem.tuition}</td>
                    ))}
                  </tr>
                </>)}
            </tbody>
          </Table></>}
    </>
  );
};

export default TuitionList;