// Read.jsx
import React, { Fragment } from 'react';
import styles from './Read.module.css';

const Read = (props ) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const DeleteHandler = (id) => {
    const de = todos.filter((todo)=> todo.id != id);
    setTodos(de);
  };

  const renderedTodos = todos.map((todo) => (
    <li key={todo.id} className={styles.ala}>
      <span className={styles.title}>{todo.title}</span>  {" "}<span className={styles.dele}onClick={()=> DeleteHandler(todo.id)}>Delete</span>
    </li>
  ));

  return (
    <div className={styles.ao}>
      <h1 className={styles.hh}><span className={styles.hp}>Pending</span> Todos</h1>
      <ol className={styles.na}>{renderedTodos}</ol>
    </div>
  );
};

export default Read;
