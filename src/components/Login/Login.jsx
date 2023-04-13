import React from "react";
import Fetch from "./Fetch";
import { useRef, useState } from "react";
import styled from "styled-components";

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
    <FormWrap>
      <Form>
        <InputWrap>
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
          />{" "}
        </InputWrap>
        <InputWrap>
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
        </InputWrap>
        <Button
          onClick={(e) => {
            e.preventDefault();
            createAccount();
          }}
        >
          회원가입
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            authenticateUser();
          }}
        >
          로그인
        </Button>
        {fetch == true ? <Fetch /> : null}
      </Form>
    </FormWrap>
  );
}

export default Login;

const FormWrap = styled.div`
  height: 30rem;
  ${(props) => props.theme.common.flexCenter}
`;
const Form = styled.form`
  width: 20rem;
  height: 20rem;
  border: 1.5px solid ${(props) => props.theme.palette.secondary};
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 1.5rem;
  width: 15rem;
  border: 1px solid ${(props) => props.theme.palette.primary};
  margin-top: 0.2rem;
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.palette.beige};
    /* border: 1px solid ${(props) => props.theme.palette.purple}; */
    transition: 0.2s ease-in-out;
  }
`;
const Button = styled.button`
  width: 15rem;
  height: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.palette.primary};
  border: none;
  font-size: ${(props) => props.theme.fontSizes.title};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.accent};
    color: ${(props) => props.theme.palette.white};
    transition: 0.3s ease-in-out;
  }
`;
