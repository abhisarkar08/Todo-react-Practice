// Create.jsx
import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import styles from './Create.module.css';
import { useForm } from 'react-hook-form';
import {toast} from "react-toastify";
import { todoContext } from '../Wrapper';

const Create = () => {
  const [todos, setTodos] = useContext(todoContext);
  const [complete, setComplete] = useState(false);

  const{
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const submitHandler = (data) => {
    data.isComplete=false;
    data.id=nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);

    toast.success("Todo Created")

    reset();
  };

  return (
    <div className={styles.spa}>
      <h1 className={styles.hh}>Set <span className={styles.hp}>Reminders</span> for Task</h1>
      <form className={styles.fo} onSubmit={handleSubmit(submitHandler)}>
        <input
          className={styles.in}
          {...register("title", { 
            required: "Title cannot be empty"
          })}
          type="text"
          placeholder="title"
        />
        <small className={styles.error}>{errors?.title?.message}</small>
        <br /><br />
        <button className={styles.btn}>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;

