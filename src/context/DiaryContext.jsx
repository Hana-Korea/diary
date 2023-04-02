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

  return {
    data,
    dataId,
    onCreate,
  };
}
export default DiaryContextProvider;
