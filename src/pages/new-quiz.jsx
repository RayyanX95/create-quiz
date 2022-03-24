import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, FormGroup, Input, Label } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

//* use functions to return the initial values to provide unique Id on each call
const initialQuestion = () => ({
  answer_id: null,
  answers: [
    {
      id: uuidv4(),
      is_true: false,
      text: ''
    },
    {
      id: uuidv4(),
      is_true: false,
      text: ''
    },
    {
      id: uuidv4(),
      is_true: false,
      text: ''
    },
    {
      id: uuidv4(),
      is_true: false,
      text: ''
    }
  ],
  feedback_false: '',
  feedback_true: '',
  id: uuidv4(),
  text: ''
});

const initialState = () => ({
  created: new Date().toLocaleString(),
  description: '',
  id: uuidv4(),
  modified: new Date().toLocaleString(),
  questions_answers: [
    initialQuestion(),
  ],
  score: null,
  title: '',
  url: ''
});


const NewQuiz = ({ updateQuizzes, quizzes, isEdit }) => {
  const getQuizById = (id) => {
    return quizzes.find(quiz => quiz.id === id);
  };

  const quizId = useParams().id;
  const [data, setData] = useState(() => isEdit ? getQuizById(quizId) : initialState());
  const navigate = useNavigate();
  console.log(useParams())

  const quizChangeHandler = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const questionsChangeHandler = (name, value, questIndex) => {
    const tempData = { ...data };
    const tempQuestions = [...tempData.questions_answers];
    tempQuestions[questIndex] = {
      ...tempQuestions[questIndex],
      [name]: value,
    }
    tempData.questions_answers = tempQuestions;
    setData(tempData);
  };

  const resetAllRadiosToFalse = (tempAnswers, ansIndex) => {
    return tempAnswers.map((ans, index) =>  ({
        ...ans,
        is_true: false,
      }))
  }
  const answersChangeHandler = (name, value, ansIndex, questIndex) => {
    console.log(value);
    const tempData = { ...data };
    const tempQuestions = [...tempData.questions_answers];
    let tempAnswers = [...tempQuestions[questIndex].answers];
    if (name === 'is_true') {
      tempAnswers = resetAllRadiosToFalse(tempAnswers, ansIndex);
    }

    tempAnswers[ansIndex] = {
      ...tempAnswers[ansIndex],
      [name]: value,
    }
    tempQuestions[questIndex].answers = tempAnswers;
    tempData.questions_answers = tempQuestions;
    setData(tempData);
  }
  // console.log('quiz.quizzes', data);

  const addNewQuestionHandler = () => {
    const tempData = { ...data };
    const tempQuestions = [...tempData.questions_answers];
    tempQuestions.push(initialQuestion());
    console.log(tempQuestions);
    tempData.questions_answers = tempQuestions;
    setData(tempData);
  };

  const submitNewQuiz = (e) => {
    e.preventDefault();
    updateQuizzes(data, quizId, isEdit);
    navigate('/');
  };

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h4 className="mb-3">Create New Quiz</h4>
          </Col>
          <Col md="auto">
            <Link to="/">
              <button type="button" className="btn btn-link">Back</button>
            </Link>
          </Col>
        </Row>
        <form className="border rounded-3 p-3" onSubmit={submitNewQuiz}>
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
                  onChange={(e) => quizChangeHandler('title', e.target.value)}
                  value={data.title}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="description"
                  type="text"
                  placeholder="description"
                  onChange={(e) => quizChangeHandler('description', e.target.value)}
                  value={data.description}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="url"
                  type="text"
                  placeholder="https://www.youtube.com/..."
                  onChange={(e) => quizChangeHandler('url', e.target.value)}
                  value={data.url}
                />
              </FormGroup>
            </Col>
          </Row>
          {data.questions_answers.map((questAns, questIndex) => <React.Fragment key={questAns.id}>
            <Row className="justify-content-center my-1">
              <Col md={8}>
                <hr className="bg-secondary" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5 className="mb-3">Questions {questIndex + 1}</h5>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input
                    name={"text" + questAns.id}
                    type="text"
                    placeholder="question"
                    onChange={(e) => questionsChangeHandler('text', e.target.value, questIndex)}
                    value={questAns.text}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input
                    name={"feedback_true" + questAns.id}
                    type="text"
                    placeholder="feedback true"
                    onChange={(e) => questionsChangeHandler('feedback_true', e.target.value, questIndex)}
                    value={questAns.feedback_true}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input
                    name={"feedback_false" + questAns.id}
                    type="text"
                    placeholder="feedback false"
                    onChange={(e) => questionsChangeHandler('feedback_false', e.target.value, questIndex)}
                    value={questAns.feedback_false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12}>
                <h6 className="mb-3">Answers of Questions {questIndex + 1}</h6>
              </Col>
              {questAns.answers.map((ans, index) => (
                <Col md={6} key={ans.id}>
                  <FormGroup>
                    <Input
                      name={"text" + uuidv4()}
                      type="text"
                      placeholder={"answer " + (index + 1)}
                      onChange={(e) => answersChangeHandler('text', e.target.value, index, questIndex)}
                      value={ans.text}
                    />
                    <div className="mt-1">
                      <Input
                        name={"is_true" + questIndex}
                        type="radio"
                        onChange={(e) => answersChangeHandler('is_true', e.target.checked, index, questIndex)}
                        checked={ans.is_true}
                      />
                      {' '}
                      <Label className="small">
                        Is correct answer
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </React.Fragment>)}

          <Row>
            <Col>
              <button type="button" className="btn btn-link" onClick={addNewQuestionHandler}>Add new Question</button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <button type="submit" className="btn btn-success">Submit Quiz</button>
            </Col>
          </Row>
        </form>
      </Container>
    </section >
  );
};

export default NewQuiz;
