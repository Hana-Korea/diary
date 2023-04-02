import React from "react";
import { useState, useRef } from "react";
import { useDiary } from "../context/DiaryContext";
function DiaryEditor() {
  const { onCreate } = useDiary();
  const [userInput, setUserInput] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const handleChangeState = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const authorInput = useRef();
  const textInput = useRef();
  const handleSubmit = (e) => {
    if (userInput.author.length < 2) {
      authorInput.current.focus();
    }
    if (userInput.content.length < 5) {
      textInput.current.focus();
    }
    onCreate(userInput.author, userInput.content, userInput.emotion);
    setUserInput({ author: "", content: "", emotion: 1 });
    alert("저장!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="2글자 이상 입력해주세요"
          ref={authorInput}
          value={userInput.author}
          name="author"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          placeholder="5글자 이상 입력해주세요"
          ref={textInput}
          name="content"
          value={userInput.content}
          onChange={handleChangeState}
        ></textarea>
      </div>
      <div>
        <select
          name="emotion"
          value={userInput.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>버튼</button>
    </div>
  );
}

export default DiaryEditor;
