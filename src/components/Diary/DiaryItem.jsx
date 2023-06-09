import React, { useState } from "react";
import { useDiary } from "../../context/DiaryContext";

function DiaryItem({ item }) {
  const { onDelete, onUpdate, emoticonMap } = useDiary();
  const [updateContent, setUpdateContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const toggleUpdateBtn = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div key={item.id} className="DiaryItem">
      <h4>작성자: {item.author}</h4>
      {isEdit ? (
        <textarea
          value={updateContent}
          onChange={(e) => {
            setUpdateContent(e.target.value);
          }}
        ></textarea>
      ) : (
        <h5>내용: {item.content}</h5>
      )}
      <h5>오늘의 기분:{emoticonMap[item.emotion]}</h5>
      <h5>작성일자:{item.created_date}</h5>

      {isEdit ? (
        <>
          {" "}
          <button onClick={toggleUpdateBtn}>수정취소</button>{" "}
          <button
            onClick={() => {
              onUpdate(item.id, updateContent);
              toggleUpdateBtn();
            }}
          >
            수정완료
          </button>{" "}
        </>
      ) : (
        <>
          <button onClick={toggleUpdateBtn}>수정하기</button>
          <button
            onClick={() => {
              onDelete(item.id);
              toggleUpdateBtn();
            }}
          >
            삭제하기
          </button>
        </>
      )}
    </div>
  );
}
export default DiaryItem;
