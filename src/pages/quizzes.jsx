import React from 'react';
import { Container, Button } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import QuizCard from '../components/quiz-card';

const Quizzes = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-between mb-3">
          <Col md="auto">
            <h3>Quizzes List</h3>
          </Col>
          <Col md="auto">
            <Button className="btn-success">Add New Quiz</Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <QuizCard />
          </Col>
          <Col md={4}>
            <QuizCard />
          </Col>
          <Col md={4}>
            <QuizCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quizzes;
