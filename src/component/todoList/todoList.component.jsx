import React, { useState } from 'react';
import Todo from '../todo/todo.component';
import TodoForm from '../todoform/todoform.component';

import './todoList.styles.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [displayType, setDisplayType] = useState('all');

  const addTodo = (todo) => {
    setTodos((previousTodos) => {
      return [todo, ...previousTodos];
    });
  };

  const editTodo = (index, newValue) => {
    setTodos((previousTodos) => {
      const updatedTodos = previousTodos.map(
        todos.id === index ? newValue : todos
      );
      return updatedTodos;
    });
    console.log(todos.id);
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) => {
      const updatedTodos = previousTodos.filter((todo) => todo.id !== id);

      return updatedTodos;
    });
  };

  const tickTodo = (id) => {
    setTodos((previousTodos) => {
      const updatedTodos = previousTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      return updatedTodos;
    });
  };

  let filteredTodos;
  if (displayType === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  } else if (displayType === 'active') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else {
    filteredTodos = todos;
  }
  return (
    <div className="todoList">
      <div className="todo__formHeader">
        <h1>todos</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={filteredTodos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        tickTodo={tickTodo}
        editTodo={editTodo}
      />
      {todos.length ? (
        <div className="app__down">
          <div className="todo__left">
            {todos.filter((todo) => !todo.completed).length} items left
          </div>
          <div
            className={`todo__toggler ${displayType === 'all' ? 'active' : ''}`}
            onClick={() => setDisplayType('all')}
          >
            All
          </div>
          <div
            className={`todo__toggler ${
              displayType === 'active' ? 'active' : ''
            }`}
            onClick={() => setDisplayType('active')}
          >
            Active
          </div>
          <div
            className={`todo__toggler ${
              displayType === 'completed' ? 'active' : ''
            }`}
            onClick={() => setDisplayType('completed')}
          >
            Completed
          </div>
          <div className="todo__clear" onClick={() => setTodos([])}>
            Clear All
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TodoList;
