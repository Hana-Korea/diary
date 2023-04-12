import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import Login from "./components/Login/Login";
import DiaryContextProvider from "./context/DiaryContext";
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
    </div>
  );
}

export default App;
