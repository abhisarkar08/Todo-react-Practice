// Create.jsx
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [complete, setComplete] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isComplete: complete,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setComplete(false);
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br /><br />
        <input
          checked={complete}
          onChange={(e) => setComplete(e.target.checked)}
          type="checkbox"
        />{' '}
        Completed
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;

