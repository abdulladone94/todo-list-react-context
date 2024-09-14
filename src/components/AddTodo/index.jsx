import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodoContext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);
  const { addTodo } = useTodos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-lg lg:max-w-xl mx-auto space-y-4"
    >
      <input
        type="text"
        value={title}
        className="form-input w-full rounded-md border border-gray-300 shadow-sm p-4 focus:ring-2 focus:ring-blue-500"
        placeholder="Add a title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        className="form-input w-full rounded-md border border-gray-300 shadow-sm p-4 focus:ring-2 focus:ring-blue-500"
        placeholder="Add a description..."
        onChange={(e) => setDescription(e.target.value)}
      />
      {showError && (
        <p className="text-red-500 text-sm">Both fields are required.</p>
      )}
      <button
        type="submit"
        className={`w-full ${
          !title.trim() || !description.trim()
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-bold rounded-md p-4 transition-colors duration-200`}
      >
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
