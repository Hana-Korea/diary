import React from "react";
import { useRef, useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    validUser ? alert("안녕하세요") : alert("회원가입해주세요");
  };

  const checkEmail = (userEmail) => {
    const emailRegexp = /[a-zA-Z0-9]*@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}/;
    return emailRegexp.test(userEmail);
  };
  const checkPassword = (userPassword) => {
    const passwordRegexp = /[a-zA-Z0-9~!@#$%";'^,&*()_+|</>=>`?:{[\}]{8,20}/;
    return passwordRegexp.test(userPassword);
  };

  return (
    <form>
      <label htmlFor="email">아이디(이메일)</label>
      <input
        id="email"
        placeholder="이메일 주소 입력"
        ref={emailRef}
        value={email}
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        name="password"
        type="password"
        ref={passwordRef}
        value={password}
        placeholder="비밀번호 입력"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     alert("환영합니다!");
        //   }
        // }}
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
      {<button>fetch</button>}
    </form>
  );
}

export default Login;
