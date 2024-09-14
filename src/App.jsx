import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col gap-y-2 mx-auto mt-10 px-20">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>

          <Routes>
            {/* Public routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Protected route for authenticated users */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  {/* Protected component */}
                  <div>
                    <AddTodo />
                    <TodoList />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
    // <div className="flex flex-col gap-y-2 mx-auto mt-10 px-20">
    //   <h1 className="text-2xl font-bold mb-4">Todo List</h1>
    //   <AddTodo />
    //   <TodoList />
    // </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Login />} path="/login" />
    //     <Route element={<SignUp />} path="/signup" />
    //     <Route element={<ProtectedRoute />}>
    //       <Route element={<AddTodo />} path="/" />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
