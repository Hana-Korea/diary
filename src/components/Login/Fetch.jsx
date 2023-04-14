import React from 'react';
import axios from 'axios';
import { Button } from './Login';
import styled from 'styled-components';
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
