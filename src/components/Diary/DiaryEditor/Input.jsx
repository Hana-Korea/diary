import React, { forwardRef } from "react";

function Input({ userInput, handleChangeState }, ref) {
  return (
    <div>
      <input
        placeholder="2글자 이상 입력해주세요"
        ref={ref}
        value={userInput.author}
        name="author"
        onChange={handleChangeState}
      />
    </div>
  );
}

export default forwardRef(Input);
