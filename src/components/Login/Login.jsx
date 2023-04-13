import React from "react";
import Fetch from "./Fetch";
import { useRef, useState } from "react";
import styled from "styled-components";
import hye from "/hyestagram.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetch, setFetch] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const createAccount = () => {
    const newLogin = {
      email,
      password,
    };
    const prevLogin = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify([newLogin]));
    if (prevLogin) {
      localStorage.setItem("user", JSON.stringify([...prevLogin, newLogin]));
    }
    console.log("회원가입됨");
    setEmail("");
    setPassword("");
  };

  const authenticateUser = () => {
    const savedUsers = JSON.parse(localStorage.getItem("user"));
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    const validUser = savedUsers.some(
      (savedUser) =>
        userEmail === savedUser.email && userPassword === savedUser.password
    );
    setEmail("");
    setPassword("");
    validUser ? setFetch(true) : alert("회원가입해주세요");
  };

  const checkEmail = (userEmail) => {
    const emailRegexp = /[a-zA-Z0-9]*@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}/;
    console.log();
    if (emailRegexp.test(userEmail) === false) {
      return console.log("false");
    }
  };
  const checkPassword = (userPassword) => {
    const passwordRegexp = /[a-zA-Z0-9~!@#$%";'^,&*()_+|</>=>`?:{[\}]{8,20}/;
    if (passwordRegexp.test(userPassword) === false) {
      return console.log("false");
    }
  };

  return (
    <>
      <Logo src={hye} />
      <Form>
        <label htmlFor="email">아이디(이메일)</label>
        <Input
          id="email"
          placeholder="이메일 주소 입력"
          ref={emailRef}
          value={email}
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={(e) => {
            checkEmail(e.target.value);
          }}
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          id="password"
          name="password"
          type="password"
          ref={passwordRef}
          value={password}
          placeholder="비밀번호 입력"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={checkPassword}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            createAccount();
          }}
        >
          회원가입
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            authenticateUser();
          }}
        >
          로그인
        </button>
        {fetch == true ? <Fetch /> : null}
      </Form>
    </>
  );
}

export default Login;

const Form = styled.form`
  width: 10rem;
  height: 15rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.theme.palette.secondary};
`;
const Input = styled.input`
  width: 3rem;
  height: 1rem;
  border: 1px solid ${(props) => props.theme.palette.primary};
`;
const Logo = styled.img`
  width: 50px;
  height: 30px;
`;
