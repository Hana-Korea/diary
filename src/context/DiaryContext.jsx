import { createContext, useState, useRef, useContext } from "react";

export const DiaryContext = createContext();

function DiaryContextProvider({ children }) {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  return (
    <DiaryContext.Provider value={{ data, setData, dataId }}>
      {children}
    </DiaryContext.Provider>
  );
}
export default DiaryContextProvider;

export function useDiary() {
  const { data, setData, dataId } = useContext(DiaryContext);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().toLocaleString("ko-KR");
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
    localStorage.setItem("diary", JSON.stringify([newItem, ...data]));
  };

  const onDelete = (id) => {
    const dataAfterDel = data.filter((it) => it.id !== id);
    setData(dataAfterDel);
    localStorage.setItem("diary", JSON.stringify(dataAfterDel));
  };
  const onUpdate = (id, updateContent) => {
    const dataAfterUpdate = data.map((it) =>
      id == it.id ? { ...it, content: updateContent } : it
    );
    setData(dataAfterUpdate);
    localStorage.setItem("diary", JSON.stringify(dataAfterUpdate));
  };
  const savedDiary = JSON.parse(localStorage.getItem("diary"));

  return {
    data,
    setData,
    dataId,
    onCreate,
    onDelete,
    onUpdate,
    savedDiary,
  };
}
// 질문*
// UseDiary() 말고 Context에 전부 저장??
// localStorage.setItem("diary", JSON.stringify(data)) <- 왜안되는지?
