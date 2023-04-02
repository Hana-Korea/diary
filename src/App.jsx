import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useRef } from "react";
import DiaryContextProvider from "./context/DiaryContext";
function App() {
  return (
    <div className="App">
      <DiaryContextProvider>
        <>
          <DiaryEditor />
          <DiaryList />{" "}
        </>
      </DiaryContextProvider>
    </div>
  );
}

export default App;
