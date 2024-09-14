import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user
  const [registeredUsers, setRegisteredUsers] = useState([]); // Store registered users
  const [error, setError] = useState('');

  // Sign Up Function
  const signUp = (name, email, password) => {
    const normalizedEmail = email.toLowerCase(); // Ensure case-insensitivity for emails
    const existingUser = registeredUsers.find(
      (user) => user.email === normalizedEmail
    );

    if (existingUser) {
      setError('User with this email already exists.');
      return false;
    }

    const newUser = { name, email: normalizedEmail, password }; // Store email in lowercase
    setRegisteredUsers([...registeredUsers, newUser]); // Save user in the state
    setUser(newUser);
    setError('');
    return true;
  };

  // Login Function
  const login = (email, password) => {
    const normalizedEmail = email.toLowerCase(); // Ensure case-insensitivity for emails
    const existingUser = registeredUsers.find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      setError('');
      return true;
    }

    setError('Invalid email or password.');
    return false;
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
