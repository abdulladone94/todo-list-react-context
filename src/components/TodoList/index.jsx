import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodoContext';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
  const { todos, toggleTodo, editTodo } = useTodos();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEditClick = (index, todo) => {
    setEditingIndex(index);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const handleSaveEdit = (index) => {
    editTodo(index, { title: editTitle, description: editDescription });
    setEditingIndex(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:max-w-lg lg:max-w-2xl space-y-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between"
        >
          {/* If in editing mode, show inputs */}
          {editingIndex === index ? (
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-x-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="form-input w-full sm:w-auto rounded-md border border-gray-300 shadow-sm p-2"
              />
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="form-input w-full sm:w-auto rounded-md border border-gray-300 shadow-sm p-2"
              />
              <button
                onClick={() => handleSaveEdit(index)}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setEditingIndex(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox w-5 h-5 text-blue-600"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
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

              {/* Edit Icon */}
              {editingIndex !== index && (
                <IconButton
                  onClick={() => handleEditClick(index, todo)}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
