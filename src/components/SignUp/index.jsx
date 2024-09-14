import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { signUp, error } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUp(name, email, password)) {
      setSuccessMessage('Sign-up successful! You can now log in.');
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignUp}
      sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}
    >
      <Typography variant="h5" mb={2}>
        Sign Up
      </Typography>
      {successMessage && (
        <Typography color="green">{successMessage}</Typography>
      )}
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
