import React from 'react';
import { Container, Button } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import QuizCard from '../components/quiz-card';
import { Link } from 'react-router-dom';

const Quizzes = ({ quizzes }) => {
  return (
    <section>
      <Container>
        <Row className="justify-content-between mb-3">
          <Col md="auto">
            <h4>Quizzes</h4>
          </Col>
          <Col md="auto">
            <Link to="/new-quiz">
              <Button className="btn-success">Add New Quiz</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {!quizzes.length
            ? <h6 className="text-center text-muted mt-3">No quizzes found, try to add one 🙂</h6>
            : quizzes?.map((quiz) => (
              <Col lg={3} md={4} key={quiz.id} className="mb-2">
                <QuizCard data={quiz} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default Quizzes;
