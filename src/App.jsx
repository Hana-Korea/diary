import "./App.css";
import Login from "./components/Login/Login";
import Diary from "./components/Diary";
import { Routes, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <NavLink to="/">홈</NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          로그인
        </NavLink>
        <NavLink
          to="/diary"
          style={({ isActive }) => ({
            background: isActive ? "orange" : "pink",
            color: isActive ? "red" : "blue",
          })}
        >
          다이어리
        </NavLink>
      </>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </div>
  );
}

export default App;
