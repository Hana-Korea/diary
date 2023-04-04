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
  };

  const onDelete = (id) => setData(data.filter((item) => item.id !== id));

  return {
    data,
    setData,
    dataId,
    onCreate,
    onDelete,
  };
}
