import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import { TodoItems } from "./TodoItems";

let count = 0;
export const Todo = () => {
  const [todoes, settodoes] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    settodoes([
      ...todoes,
      { no: count++, Text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };
  useEffect(() => {
    console.log(todoes);
  }, [todoes]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do-List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todoes.map((item, index) => {
          return (
            <TodoItems
              key={index}
              no={item.no}
              display={item.display}
              Text={item.Text}
            />
          );
        })}
      </div>
    </div>
  );
};
