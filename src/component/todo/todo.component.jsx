import { Checkbox } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState, useRef } from 'react';

import './todo.styles.css';

function Todo({ todos, tickTodo, deleteTodo, editTodo }) {
  const [hovered, setHovered] = useState(false);
  const toggledHover = () => setHovered(!hovered);
  const inputRef = useRef(null);

  const [edit, setEdit] = useState({ id: null, text: '', isInEditMode: false });

  const changeEditMode = () => {
    setEdit({ isInEditMode: !edit.isInEditMode });
  };

  const updateTodo = () => {
    const newValue = () =>
      setEdit({
        isInEditMode: false,
        value: inputRef.current.value,
      });

    console.log(inputRef.current.value, todos, edit.id);
    editTodo(edit.id, newValue);
  };

  return edit.isInEditMode ? (
    <div>
      <input
        className="todo__editInput"
        type="text"
        defaultValue={edit.value}
        ref={inputRef}
      />
      <Close onClick={changeEditMode} />
      <button onClick={updateTodo}>OK</button>
    </div>
  ) : (
    todos.map((todo, index) => (
      <div key={todo.id}>
        <div
          className="todo"
          key={index}
          onMouseEnter={toggledHover}
          onMouseLeave={toggledHover}
          onDoubleClick={() => changeEditMode(todos)}
        >
          <Checkbox
            checked={todo.completed}
            onClick={() => tickTodo(todo.id)}
          />
          <li className={todo.completed && 'completed'}>{todo.text}</li>
          <div className="close">
            <Close onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      </div>
    ))
  );
}

export default Todo;
