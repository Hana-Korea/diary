import React from "react";
import DiaryItem from "./DiaryItem";
import { useDiary } from "../context/DiaryContext";
import { useEffect } from "react";
function DiaryList() {
  const { savedDiary } = useDiary();
  return (
    <div>
      {savedDiary.map((item) => (
        <div key={item.id}>
          <DiaryItem {...item} />
        </div>
      ))}
    </div>
  );
}
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
