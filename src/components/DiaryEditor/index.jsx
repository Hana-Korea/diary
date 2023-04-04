import React from "react";
import { useState, useRef } from "react";
import Input from "./Input";
import Content from "./Content";
import Option from "./Option";
import { useDiary } from "../../context/DiaryContext";

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
    // if (userInput.author.length < 2) {
    //   authorInput.current.focus();
    // }
    // if (userInput.content.length < 5) {
    //   textInput.current.focus();
    // }

    onCreate(userInput.author, userInput.content, userInput.emotion);
    setUserInput({ author: "", content: "", emotion: 1 });
    // alert("저장!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>

      <Input
        ref={authorInput}
        userInput={userInput}
        handleChangeState={handleChangeState}
      />

      <Content
        ref={textInput}
        userInput={userInput}
        handleChangeState={handleChangeState}
      />
      <Option userInput={userInput} handleChangeState={handleChangeState} />

      <button onClick={handleSubmit}>버튼</button>
    </div>
  );
}

export default DiaryEditor;
