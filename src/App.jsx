import React, { useState } from 'react';
import Create from './component/Create.jsx';
import Read from './component/Read.jsx';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'I can do it', isComplete: false },
  ]);

  return (
    <div>
      <Create todos={todos} setTodos={setTodos} />
      <br /><br />
      <Read todos={todos} />
    </div>
  );
};

export default App;




