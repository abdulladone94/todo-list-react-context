import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const localTodos = localStorage.getItem('todos');
      return localTodos ? JSON.parse(localTodos) : [];
    } catch (e) {
      console.error('Invalid JSON in localStorage, resetting todos:', e);
      return [];
    }
  });

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = ({ title, description }) => {
    const newTodo = { title, description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? new Date().toISOString() : null,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // editTodo
  const editTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(newTodos);
  };

  // deleteTodo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, editTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  return context;
};

export default TodoContext;
