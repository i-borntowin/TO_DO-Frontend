"use client"
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
    localStorage.setItem("todos_count", count);
  };
  useEffect(() => {
    settodoes(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todoes);
      localStorage.setItem("todos", JSON.stringify(todoes));
    }, 100);
  }, [todoes]);

  // const url=process.env.dbUrl

  return (
    <div className="todo">
      {/* {process.env.dbUrl} */}
      {/* {url} */}
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
              settodoes={settodoes}
              no={item.no}
              display={item.display}
              text={item.Text}
            />
          );
        })}
      </div>
    </div>
  );
};
