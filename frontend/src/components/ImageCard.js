import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ word }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1489686995744-f47e995ffe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzc4Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjMyODI3NzI&ixlib=rb-1.2.1&q=80&w=400"
      />
      <Card.Body>
        <Card.Title>{word}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
