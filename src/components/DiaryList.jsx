import React from "react";
import DiaryItem from "./DiaryItem";
// import dummyList from "../constants/data";
import { useDiary } from "../context/DiaryContext";
function DiaryList() {
  const { data } = useDiary();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
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
