// Read.jsx
import React from 'react';

const Read = ({ todos }) => {
  const renderedTodos = todos.map((todo) => (
    <li key={todo.id}>
      {todo.title} {todo.isComplete ? "(✓)" : ""}
    </li>
  ));

  return (
    <div>
      <h1>Todos</h1>
      <ol>{renderedTodos}</ol>
    </div>
  );
};

export default Read;
