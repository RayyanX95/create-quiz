import React, { useCallback, useEffect, useState } from 'react';
import { FormGroup, Input, Label, Row } from 'reactstrap';
import { Col } from 'reactstrap';

const QuestionCard = ({ data }) => {
  const [answers, setAnswers] = useState([]);

  const addShowFeedbackPropToData = useCallback(() => {
    const tempAnswers = data.answers?.map((ans) => ({ ...ans, showFeedback: false }));
    setAnswers(tempAnswers);
  }, [data.answers]);

  useEffect(() => {
    addShowFeedbackPropToData();
  }, [addShowFeedbackPropToData]);

  const resetAllRadiosToFalse = (tempAnswers) => {
    return tempAnswers?.map((ans) => ({
      ...ans,
      showFeedback: false,
    }));
  }

  const selectAnswerHandler = (id) => {
    const ansIndex = answers.findIndex(ans => ans.id === id);
    const tempAnswers = resetAllRadiosToFalse(answers, ansIndex);
    tempAnswers[ansIndex] = {
      ...tempAnswers[ansIndex],
      showFeedback: true,
    }

    setAnswers(tempAnswers);
  }
  console.log(data);
  return (
    <section className="question-card">
      <Row>
        <Col md={12}>
          <h6 className="mb-1">{data.text ? data.text : 'Q. question 1 text'}</h6>
        </Col>
      </Row>
      <Row className="justify-content-center mb-1">
        <Col md={8}>
          <hr className="bg-secondary" />
        </Col>
      </Row>
      <Row>
        {answers?.map((ans) => (
          <Col md={6} key={ans.id} className="mb-2">
            <FormGroup check>
              <Input
                name={data.id}
                type="radio"
                onChange={() => selectAnswerHandler(ans.id)}
              />
              {' '}
              <Label check className="small mb-0">
                {ans.text ? ans.text : 'Option two can be something else and selecting it will deselect option one'}
              </Label>
              <p className={`feedback ${ans.is_true ? 'text-success' : 'text-danger'} ${!ans.showFeedback && 'hidden'}`}>
                {ans.is_true ? (data.feedback_true || 'Correct answer') : (data.feedback_false || 'Wrong answer')}
              </p>
            </FormGroup>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default QuestionCard;
