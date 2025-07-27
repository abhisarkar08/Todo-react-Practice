import { createContext } from 'react'
import { useState } from 'react';

export const todoContext = createContext(null);

export const Wrapper = (props) => {
    const [todos, setTodos] = useState([]);

  return (
    <todoContext.Provider value={[todos, setTodos]}>
        {props.children}
    </todoContext.Provider>
  )
}
