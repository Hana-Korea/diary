import React from "react";
import { useDiary } from "../../../context/DiaryContext";
import { useState, useRef } from "react";
import Input from "./Input";
import Content from "./Content";
import Option from "./Option";
import Happy from "/happy.gif";
import Joy from "/joy.gif";
import Loopy from "/Loopy.png";
import frown from "/frown.gif";
import sad from "/sad.gif";
function DiaryEditor() {
  const { onCreate, emoticonMap } = useDiary();
  const [userInput, setUserInput] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const [logo, setLogo] = useState(
    <img src={Happy} style={{ width: "200px", height: "200px" }} />
  );
  const [isWritten, setIsWritten] = useState(false);
  const handleChangeState = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
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
    // alert("저장!");
  };

  const showImage = () => {
    setIsWritten(true);
    switch (userInput.emotion) {
      case "1😭":
        setLogo(
          <img src={Happy} style={{ width: "200px", height: "200px" }} />
        );
        break;
      case "2😞":
        setLogo(<img src={Joy} style={{ width: "200px", height: "200px" }} />);
        break;
      case "3😐":
        setLogo(
          <img src={Loopy} style={{ width: "200px", height: "200px" }} />
        );
        break;
      case "4🙂":
        setLogo(
          <img src={frown} style={{ width: "200px", height: "200px" }} />
        );
        break;
      case "5😊":
        setLogo(<img src={sad} style={{ width: "200px", height: "200px" }} />);
        break;
    }
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
          setUserInput({ author: "", content: "", emotion: 1 });
        }}
      >
        저장
      </button>
      {isWritten === true ? <div>{logo}</div> : null}
    </div>
  );
}

export default DiaryEditor;
