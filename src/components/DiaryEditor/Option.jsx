import React from "react";

function Option({ userInput, handleChangeState }) {
  return (
    <div className="Option">
      <span>오늘의 기분지수</span>
      <select
        name="emotion"
        value={userInput.emotion}
        onChange={handleChangeState}
      >
        <option value={1}>1😭</option>
        <option value={2}>2😞</option>
        <option value={3}>3😐</option>
        <option value={4}>4🙂</option>
        <option value={5}>5😊</option>
      </select>
    </div>
  );
}

export default Option;
