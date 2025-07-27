import Create from './component/Create.jsx';
import Read from './component/Read.jsx';
import styles from './App.module.css';
import { useContext } from 'react';
import { todoContext } from './Wrapper.jsx';

const App = () => {
  const [todos, setTodos] = useContext(todoContext);

  return (
    <div className={styles.hh}>
      <Create todos={todos} setTodos={setTodos} />
      <br /><br />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;




