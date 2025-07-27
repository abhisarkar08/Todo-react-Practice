// Read.jsx
import React, { Fragment, useContext } from 'react';
import styles from './Read.module.css';
import {toast} from "react-toastify";
import { todoContext } from '../Wrapper';


const Read = () => {
  const [todos,setTodos] = useContext(todoContext);

  const DeleteHandler = (id) => {
    const de = todos.filter((todo)=> todo.id != id);
    setTodos(de);
    toast.error("Todo Deleted")
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
