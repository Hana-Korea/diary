import React, { forwardRef } from "react";

function Content({ userInput, handleChangeState }, ref) {
  return (
    <textarea
      placeholder="5글자 이상 입력해주세요"
      ref={ref}
      name="content"
      value={userInput.content}
      onChange={handleChangeState}
    ></textarea>
  );
}

export default forwardRef(Content);
