import React from "react";
import { useDiary } from "../../context/DiaryContext";
import { useState, useRef } from "react";
import Input from "./Input";
import Content from "./Content";
import Option from "./Option";
// import tiger from "../../../public";

function DiaryEditor() {
  const { onCreate, emoticonMap } = useDiary();
  const [userInput, setUserInput] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const [logo, setLogo] = useState(1);
  const authorInput = useRef();
  const textInput = useRef();
  const handleSubmit = () => {
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

  const showImage = () => {
    switch (userInput.emotion) {
      case 1: {
        return "https://media.tenor.com/olrLtkAKZ7AAAAAM/wave-inside-out.gif";
      }
      case 2: {
        return "https://media.tenor.com/olrLtkAKZ7AAAAAM/wave-inside-out.gif";
      }
      case 3: {
        return "https://media.tenor.com/cXI2cy9yEYoAAAAM/crying-sad.gif";
      }
    }
    setLogo("https://media.tenor.com/olrLtkAKZ7AAAAAM/wave-inside-out.gif");
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
      <Option
        userInput={userInput}
        handleChangeState={handleChangeState}
        emoticonMap={emoticonMap}
      />

      <button
        onClick={() => {
          handleSubmit();
          showImage();
        }}
      >
        저장
      </button>
      {/* <img src={require{logo}} style={{ width: "200px", height: "200px" }} /> */}
    </div>
  );
}

export default DiaryEditor;
