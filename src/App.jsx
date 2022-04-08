import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomopleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncomopleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncomopleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompletTodos = [...completeTodos, incompleteTodos[index]];
    setIncomopleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompletTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncomopleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

// export default App
