// Create.jsx
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './Create.module.css';

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
    <div className={styles.spa}>
      <h1 className={styles.hh}>Set <span className={styles.hp}>Reminders</span> for Task</h1>
      <form className={styles.fo} onSubmit={submitHandler}>
        <input
          className={styles.in}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br /><br />
        <button className={styles.btn}>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;

