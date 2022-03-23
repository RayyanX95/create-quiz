import React from 'react';
import { FormGroup, Input, Label, Row } from 'reactstrap';
import { Col } from 'reactstrap';

const QuestionCard = () => {
  return (
    <section className="border question-card w-75 mx-auto">
      <Row>
        <Col md={12}>
          <h6 className="mb-1">Q. question 1 text</h6>
        </Col>
      </Row>
      <Row className="justify-content-center mb-1">
        <Col md={8}>
          <hr className="bg-secondary" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
            />
            {' '}
            <Label check className="small">
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
            />
            {' '}
            <Label check className="small">
            Option Option Option Option Option Option Option Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
            />
            {' '}
            <Label check className="small">
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
            />
            {' '}
            <Label check className="small">
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </section>
  );
};

export default QuestionCard;
