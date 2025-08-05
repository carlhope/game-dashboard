import { useState } from 'react';
import axios from 'axios';
import { authService } from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';





export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated} = useAuth();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        email: form.email.trim(),
        password: form.password.trim()
      };
      await authService.login({ ...payload });
      setError('');
      alert('Login successful');
      setIsAuthenticated(true);
      navigate('/games');
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}