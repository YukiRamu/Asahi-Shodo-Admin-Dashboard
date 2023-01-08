import React from 'react';
import './TuitionList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Row, Col } from 'react-bootstrap';

const TuitionList = () => {

  //redux
  const student = useSelector(state => state.rootReducer.student);
  const dispatch = useDispatch();

  //data
  const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nobemver', 'December'];

  return (
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
          <tr>
            <td className='studentName'>神奈川　拓斗</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td className='dateData' key={index}>1/4</td>
            ))}
          </tr>
          <tr>
            <td className='studentName' >木村　卓也</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td className='dateData' key={index}>1/5</td>
            ))}
          </tr>
          <tr>
            <td className='studentName'>沢田　まり</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td className='dateData' key={index}>1/8</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TuitionList;