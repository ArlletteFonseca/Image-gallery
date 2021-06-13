import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Image Gallery</h1>
      <p>
        This is an application that retrieves photos using Unsplash API. In
        order to start any search term in the input field
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
