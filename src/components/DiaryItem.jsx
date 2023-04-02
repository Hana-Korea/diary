import React from "react";

function DiaryItem({ ...item }) {
  return (
    <div key={item.id}>
      <h4>{item.author}</h4>
      <h5>{item.content}</h5>
      <h5>{item.emotion}</h5>
      <h5>{item.created_date}</h5>
    </div>
  );
}

export default DiaryItem;
