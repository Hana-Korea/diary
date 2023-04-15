import React from 'react';
import { useDiary } from '../../../context/DiaryContext';
import { useState, useRef, useEffect } from 'react';
import Input from './Input';
import Content from './Content';
import Option from './Option';
import Happy from '/happy.gif';
import Joy from '/joy.gif';
import Loopy from '/Loopy.png';
import frown from '/frown.gif';
import sad from '/sad.gif';
import { Cookies, useCookies } from 'react-cookie';

function DiaryEditor() {
  const { onCreate, emoticonMap } = useDiary();
  const [userInput, setUserInput] = useState({
    author: '',
    content: '',
    emotion: 1,
  });
  const [cookies, setCookie, removeCookie] = useCookies(['img']);
  const [logo, setLogo] = useState(
    <img src={Happy} style={{ width: '200px', height: '200px' }} />
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
  const allCookies = document.cookie;
  const [imgSrc, setImgSrc] = useState('e');
  useEffect(() => {
    setImgSrc(allCookies.slice(4));
  }, [allCookies]);

  useEffect(() => {
    setLogo(
      <img src={`/${imgSrc}.gif`} style={{ width: '200px', height: '200px' }} />
    );
  }, [imgSrc]);
  const showImage = () => {
    setIsWritten(true);
    switch (userInput.emotion) {
      case '1😭':
        setCookie('img', 'happy', { maxAge: 10 });
        break;
      case '2😞':
        setCookie('img', 'joy', { maxAge: 10 });
        break;
      case '3😐':
        setCookie('img', 'Loopy', { maxAge: 10 });
      case '4🙂':
        setCookie('img', 'frown', { maxAge: 10 });
        break;
      case '5😊':
        setCookie('img', 'sad', { maxAge: 10 });
        break;
    }
  };

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기{imgSrc}</h2>

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
          setUserInput({ author: '', content: '', emotion: 1 });
        }}
      >
        저장
      </button>
      {isWritten ? <div>{logo}</div> : null}
    </div>
  );
}

export default DiaryEditor;
