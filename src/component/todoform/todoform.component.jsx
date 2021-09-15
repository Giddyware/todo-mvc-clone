import { ExpandMore } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';

import './todoform.styles.css';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    // return () => {
    //   cleanup
    // }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false,
    });

    setInput('');
  };

  return (
    <div>
      <form className="todo__form" onSubmit={handleSubmit}>
        <div className="todo__formInput">
          <ExpandMore />
          <input
            ref={inputRef}
            value={input}
            placeholder="What needs to be done?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={!input} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
