import React from "react";
import DiaryEditor from "@/components/Diary/DiaryEditor";
import DiaryList from "@/components/Diary/DiaryList";
import DiaryContextProvider from "../../context/DiaryContext";

function Diary() {
  return (
    <DiaryContextProvider>
      <DiaryEditor />
      <DiaryList />
    </DiaryContextProvider>
  );
}

export default Diary;
