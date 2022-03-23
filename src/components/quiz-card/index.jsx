import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';

const QuizCard = () => {
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5" className="mb-3">
          Card title
        </CardTitle>
        <p className="text-muted small ">modified at 2020-09-09 09:26:39</p>
        <Row className="justify-content-between align-items-center">
          <Col sm="auto">
            <small className="bg-light px-2 py-1 rounded-1">18 Questions</small>
          </Col>
          <Col sm="auto">
            <Button className="px-3">Edit</Button>
          </Col>
        </Row>

      </CardBody>
    </Card>
  );
};

export default QuizCard;
