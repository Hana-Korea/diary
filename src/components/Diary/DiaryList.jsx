import React from "react";
import DiaryItem from "./DiaryItem";
import { useDiary } from "../../context/DiaryContext";
function DiaryList() {
  const { savedDiary } = useDiary();
  return (
    <div>
      {savedDiary !== null
        ? savedDiary.map((item) => (
            <div key={item.id}>
              <DiaryItem item={item} />
            </div>
          ))
        : null}
    </div>
  );
}
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
