import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1489686995744-f47e995ffe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzc4Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjMyODI3NzI&ixlib=rb-1.2.1&q=80&w=400"
      />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
