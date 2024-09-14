import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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
