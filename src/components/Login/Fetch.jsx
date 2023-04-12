import React from "react";
import axios from "axios";

function Fetch() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        axios
          .get(`https://jsonplaceholder.typicode.com/todos/1`)
          .then((res) => console.log(res.data));
      }}
    >
      fetch
    </button>
  );
}

export default Fetch;
