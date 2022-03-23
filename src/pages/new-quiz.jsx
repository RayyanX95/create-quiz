import React from 'react';
import { Col, Container, Row, FormGroup, Input, Label } from 'reactstrap';

const NewQuiz = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h3 className="mb-3">Create New Quiz</h3>
          </Col>
        </Row>
        <div className="border rounded-3 p-3">
          <Row>
            <Col md={12}>
              <h5 className="mb-3">Quiz</h5>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="title"
                  type="text"
                  placeholder="title"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="description"
                  type="text"
                  placeholder="description"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="youtube_url"
                  type="text"
                  placeholder="youtube url"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col md={8}>
              <hr className="bg-secondary" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5 className="mb-3">Questions 1</h5>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="question"
                  type="text"
                  placeholder="question"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="true_feedback"
                  type="text"
                  placeholder="true feedback"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="false_feedback"
                  type="text"
                  placeholder="false feedback"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <h6 className="mb-3">Answers of Questions 1</h6>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="answer_one"
                  type="text"
                  placeholder="answer one"
                />
                <div className="mt-1">
                  <Input
                    name="is_correct_answer"
                    type="radio"
                    check
                  />
                  {' '}
                  <Label className="small">
                    Is correct answer
                  </Label>
                </div>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="answer_two"
                  type="text"
                  placeholder="answer two"
                />
                <div className="mt-1">
                  <Input
                    name="is_correct_answer"
                    type="radio"
                    check
                  />
                  {' '}
                  <Label className="small">
                    Is correct answer
                  </Label>
                </div>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="answer_three"
                  type="text"
                  placeholder="answer three"
                />
                <div className="mt-1">
                  <Input
                    name="is_correct_answer"
                    type="radio"
                    check
                  />
                  {' '}
                  <Label className="small">
                    Is correct answer
                  </Label>
                </div>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="answer_four"
                  type="text"
                  placeholder="answer four"
                />
                <div className="mt-1">
                  <Input
                    name="is_correct_answer"
                    type="radio"
                    check
                  />
                  {' '}
                  <Label className="small">
                    Is correct answer
                  </Label>
                </div>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <button className="btn btn-link">Add new Question</button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <button className="btn btn-success">Submit Quiz</button>
            </Col>
          </Row>
        </div>
      </Container>
    </section >
  );
};

export default NewQuiz;
