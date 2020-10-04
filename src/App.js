import React from 'react';
import './App.css';

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo({ todo }) {
  return <div className='todo'>{todo.text}</div>;
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: 'Learn about React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build really cool todo app' },
  ]);
  const [value, setValue] = React.useState('');
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
