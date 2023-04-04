import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
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
