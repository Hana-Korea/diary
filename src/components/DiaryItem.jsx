import React, { useState } from "react";
import { useDiary } from "../context/DiaryContext";
function DiaryItem({ ...item }) {
  const { onDelete, data, setData } = useDiary();
  const [updateContent, setUpdateContent] = useState("");
  const [updateBtnContent, setUpdateBtnContent] = useState("수정하기");
  const [deleteBtnContent, setDeleteBtnContent] = useState("삭제하기");
  const [isEdit, setIsEdit] = useState(false);
  const removeItem = () => {
    onDelete(item.id);
  };
  const toggleUpdateBtn = () => {
    setIsEdit(!isEdit);
    setUpdateBtnContent(isEdit ? "수정하기" : "수정완료");
    setDeleteBtnContent(isEdit ? "삭제하기" : "수정취소");
  };

  const onUpdate = (id) => {
    setData(
      data.map((it) => (id == it.id ? { ...it, content: updateContent } : it))
    );
  };

  return (
    <div key={item.id} className="DiaryItem">
      <h4>{item.author}</h4>
      {isEdit ? (
        <textarea
          value={updateContent}
          onChange={(e) => {
            setUpdateContent(e.target.value);
          }}
        ></textarea>
      ) : (
        <h5>{item.content}</h5>
      )}
      <h5>{item.emotion}</h5>
      <h5>{item.created_date}</h5>
      <button
        onClick={() => {
          toggleUpdateBtn();
          if (isEdit == true) {
            onUpdate(item.id);
          }
        }}
      >
        {updateBtnContent}
      </button>
      <button
        onClick={() => {
          removeItem();
        }}
      >
        {deleteBtnContent}
      </button>
    </div>
  );
}
export default DiaryItem;
