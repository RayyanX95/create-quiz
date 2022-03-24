import React from 'react';
import { Row, Col, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const QuizCard = ({ data }) => {
  return (
    <Link to={`/quiz/${data.id}/questions`} className="overwrite-anchor-style">
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className="mb-3">
            {data.title || "untitled"}
          </CardTitle>
          <p className="text-muted small ">modified at {data.modified}</p>
          <Row className="justify-content-between align-items-center">
            <Col sm="auto">
              <small className="bg-light px-2 py-1 rounded-1">{data?.questions_answers?.length} Questions</small>
            </Col>
            <Col sm="auto">
              <Link to={`/quiz/${data.id}`}>
                <Button className="px-3">Edit</Button>
              </Link>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </Link>
  );
};

export default QuizCard;
