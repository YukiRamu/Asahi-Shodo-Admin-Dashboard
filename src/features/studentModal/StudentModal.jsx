import React, { useState, useEffect } from 'react';
import './StudentModal.scss';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import rootReducer from '../../reduer';

const StudentModal = (props) => {

  //redux
  const student = useSelector(state => state.rootReducer.student);

  //private state
  const [selected, setSelected] = useState([]);

  //method
  //get student detail by ID
  useEffect(() => {
    if (props.id !== 0 && student.length !== 0) {
      const selectedStudent = student.filter(elem => elem.id === props.id);
      setSelected(selectedStudent[0]);
    }
  }, [props.id, student.length]);

  return (
    <>
      {selected.length !== 0 &&
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show} onHide={props.handleClose} animation={false}
        >
          <Modal.Header className='studentModalHeader' closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {selected.name} ({selected.kana})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='studentModalBody'>
            <h5>Monday</h5>
            <Row>
              <Col xs={3} md={4} className='tileCol'>
                Grade:
              </Col>
              <Col xs={9} md={8}>
                {selected.grade}
              </Col>
            </Row>
            <Row>
              <Col xs={3} md={4} className='tileCol'>
                Address:
              </Col>
              <Col xs={9} md={8}>
                {selected.address}
              </Col>
            </Row>
            <Row>
              <Col xs={3} md={4} className='tileCol'>
                Tel:
              </Col>
              <Col xs={9} md={8}>
                {selected.tel}
              </Col>
            </Row>
            <Row>
              <Col xs={3} md={4} className='tileCol'>
                Note:
              </Col>
              <Col xs={9} md={8}>
                {selected.note}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className='studentModalFooter'>
            <Button className='closeButton' variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>}
    </>
  );
};

export default StudentModal;