import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col gap-y-2 mx-auto mt-10 px-20">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
