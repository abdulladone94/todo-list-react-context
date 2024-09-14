import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo } = useTodos();
  return (
    <div className="max-w-md mx-auto p-4 sm:max-w-lg lg:max-w-2xl space-y-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between"
        >
          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 text-blue-600"
              checked={todo.completed}
              onChange={(e) => toggleTodo(index)}
            />
            <label
              className={`text-lg ${
                todo.completed ? 'text-gray-400 line-through' : 'text-black'
              }`}
            >
              Title: {todo.title}
            </label>
          </div>

          {/* Description */}
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <p
              className={`text-sm sm:text-base ${
                todo.completed ? 'text-gray-400 line-through' : 'text-black'
              }`}
            >
              Description: {todo.description}
            </p>
          </div>

          {/* Completed Date */}
          {todo.completed && todo.completedAt && (
            <div className="mt-2 sm:mt-0 sm:ml-4 text-sm text-gray-600">
              Completed At: {new Date(todo.completedAt).toLocaleString()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
