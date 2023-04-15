import React from 'react';
import axios from 'axios';
import { Button } from './Login';
function Fetch() {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        axios
          .get(`https://jsonplaceholder.typicode.com/todos/1`)
          .then((res) => console.log(res.data));
      }}
    >
      {' '}
      fetch
    </Button>
  );
}

export default Fetch;
