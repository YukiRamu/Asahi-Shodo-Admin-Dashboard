import React, { useEffect } from 'react';
import './TuitionList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Row, Col } from 'react-bootstrap';
import data from '../../data/data.json'; //will be connected to mongo DB in the future  
import { getAllStudent, getAllTuition } from '../../action/Action';
import { getData } from '../../data/StudentData';
import uuid from 'react-uuid';

const TuitionList = () => {

  //redux
  const studentData = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nobemver', 'December'];

  console.log(studentData.tuitionList);

  //When the component is first mounted
  useEffect(() => {
    //get studentList
    (async () => {
      const fetchedData = await getData();
      if (fetchedData.length !== 0) {
        const DT = fetchedData.map((elem, index) => ({
          id: index + 1,
          name: `${elem.name.first} ${elem.name.last}`,
          age: elem.dob.age,
          email: elem.email,
          gender: elem.gender,
          location: elem.location.country,
          address: `${elem.location.street.number} ${elem.location.street.name}, ${elem.location.city}, ${elem.location.state}, ${elem.location.country}, ${elem.location.postcode}`,
          picture: elem.picture.large,
        }));
        dispatch(getAllStudent(DT));
      }
    })();

    //get tuitionList
    try {
      (async () => {
        // const student = await fetch(data.student); //fetch json data
        const tuition = await fetch(data.tuition); // will rewrite with MongoDB
        if (!tuition.ok) {
          throw tuition.statusText;
        } else {
          dispatch(getAllTuition(data.tuition));
        }
      })();
    } catch (error) {
      console.error(`Failed to fetch tuition Data. Error= ${error}`);
    }
  }, []);

  return (
    <>
      {(studentData.studentList.length !== 0 && studentData.tuitionList.length) &&
        <>
          <Table responsive className='tuitionTable'>
            <thead>
              <tr>
                <th>Name</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={uuid()}>{Month[index]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentData.studentList.map(elem =>
                <>
                  <tr key={uuid()}>
                    <td className='studentName'>{elem.name}</td>
                    {Array.from({ length: 12 }).map((_) => (
                      <td className='dateData' key={uuid()}>3000{elem.tuition}</td>
                    ))}
                  </tr>
                </>)}
            </tbody>
          </Table>
        </>}
    </>
  );
};

export default TuitionList;