import React, { useReducer, useState, useEffect, useCallback, useMemo } from 'react';
import TodoItem from './components/TodoItem';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

function todoReducer(state, action) {
  console.log('[Reducer Action]', action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('[Effect Ran] Todos saved to localStorage');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = useCallback(() => {
    if (input.trim()) {
      console.log('[State Updated] New todo added:', `'${input}'`);
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  }, [input]);

  const handleDeleteTodo = useCallback((id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }, []);

  const handleToggleTodo = useCallback((id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }, []);

  const activeTodos = useMemo(() => {
    const filtered = todos.filter(todo => !todo.completed);
    console.log('[Memo] Filtered', filtered.length, 'active todos');
    return filtered;
  }, [todos]);

  return (
    <div className="app">
      <h1>React Hooks To-Do App</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <h3>All Todos</h3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      ))}

      <h3>Active Todos (Memoized)</h3>
      {activeTodos.map(todo => (
        <div key={todo.id} className="active-todo">{todo.text}</div>
      ))}
    </div>
  );
}
