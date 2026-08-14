import { useState } from 'react'
import Todo from './components/todo';
import TodoForm from './components/todo-form';
import Search from './components/search';
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Realizar planilha ",
      category: "(Trabalho)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia ",
      category: "(Pessoal)",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React ",
      category: "(Estudos)",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState('');

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search Search={search} setSearch={setSearch} />

      <div className="to-do-list">
        {todos.filter((todo)=> todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
