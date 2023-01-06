import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './MenuCard.scss';
import { IoIosPeople } from "react-icons/io";
import { AiFillAccountBook } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MenuCard = () => {
  
  //router
  const navigate = useNavigate();

  //method
  const naviateMenu = (menuItem) => {
    switch (menuItem) {
      case "student":
        navigate('/student');
        break;
      case "tuition":
        navigate('/tuition');
        break;
      case "classroom":
        navigate('/classroom');
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid className='menuCardContainer'>
      <Row lg={4} md={2} xs={1}>
        <Col>
          <Card className='menuItem student' onClick={() => naviateMenu("student")}>
            <IoIosPeople className='itemIcon' />
            <Card.Body>
              <Card.Text>
                STUDENT
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='menuItem tuition' onClick={() => naviateMenu("tuition")}>
            <AiFillAccountBook className='itemIcon' />
            <Card.Body>
              <Card.Text>
                TUITION
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='menuItem classroom' onClick={() => naviateMenu("classroom")}>
            <BsFillHouseFill className='itemIcon' />
            <Card.Body>
              <Card.Text>
                CLASSROOM
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default MenuCard;