import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import Login from "./components/Login/Login";
import DiaryContextProvider from "./context/DiaryContext";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <DiaryContextProvider>
        <>
          {" "}
          <Login />
          <DiaryEditor />
          <DiaryList />
        </>
      </DiaryContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
