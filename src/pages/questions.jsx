import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import QuestionCard from '../components/question-card';

const Questions = ({ quizzes }) => {
  const quizId = useParams().id;
  const questions = useMemo(() => {
    return quizzes.find(q => q.id === quizId)?.questions_answers;
  }, [quizzes, quizId]);

  return (
    <section>
      <Container>
        <Row className="mb-3">
          <Col>
            <h4>Questions</h4>
          </Col>
          <Col md="auto">
            <Link to="/">
              <button type="button" className="btn btn-link">Back</button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {!questions?.length ? <h6 className="text-center text-muted">Something went wrong ☹️</h6>
            : questions?.map((quest) => (
              <Col lg={9} key={quest.id}>
                <QuestionCard data={quest} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section >
  );
};

export default Questions;
